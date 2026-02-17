'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { Navbar } from './navbar';
import { APP_NAV_ITEMS, Sidebar } from './sidebar';

const SIDEBAR_STORAGE_KEY = 'bn_sidebar_collapsed';

type MainLayoutProps = {
  pageTitle: string;
  pageDescription?: string;
  children: ReactNode;
};

export function MainLayout({ pageTitle, pageDescription, children }: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const rawValue = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    setCollapsed(rawValue === 'true');
  }, []);

  useEffect(() => {
    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(collapsed));
  }, [collapsed]);

  const navLinks = useMemo(() => APP_NAV_ITEMS.slice(0, 4), []);

  return (
    <div className="min-h-screen bg-brand-radial">
      <div className="flex">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(prev => !prev)} />

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <Navbar onOpenMobileMenu={() => setMobileOpen(true)} />

          {mobileOpen ? (
            <div
              className="fixed inset-0 z-40 bg-black/40 p-4 lg:hidden"
              onClick={() => setMobileOpen(false)}
            >
              <div
                className="max-w-xs rounded-3xl border border-border bg-background p-4"
                onClick={event => event.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-primary">Menu</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setMobileOpen(false)}
                    data-testid="close_mobile_menu"
                  >
                    Cerrar
                  </Button>
                </div>
                <nav className="space-y-2" data-testid="mobile_menu_nav">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-accent"
                      data-testid="mobile_menu_link"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          ) : null}

          <main
            className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6 lg:px-8"
            data-testid="appMainContent"
          >
            <div
              className={cn(
                'mb-6 rounded-3xl border border-border/70 bg-card/70 p-5 backdrop-blur',
                'shadow-soft'
              )}
            >
              <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {pageTitle}
              </h1>
              {pageDescription ? (
                <p className="mt-1 text-sm text-muted-foreground">{pageDescription}</p>
              ) : null}
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
