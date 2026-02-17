'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AudioLines,
  ChartColumn,
  Files,
  PanelLeftClose,
  PanelLeftOpen,
  Settings2,
  WalletCards,
} from 'lucide-react';
import type * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const APP_NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Panel', icon: ChartColumn },
  { href: '/history', label: 'Procesamientos', icon: AudioLines },
  { href: '/budgets', label: 'Presupuestos', icon: Files },
  { href: '/subscription', label: 'Plan y consumo', icon: WalletCards },
  { href: '/settings', label: 'Configuracion', icon: Settings2 },
];

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'hidden h-screen shrink-0 border-r border-border/60 bg-card/85 backdrop-blur lg:flex lg:flex-col',
        collapsed ? 'w-20' : 'w-72'
      )}
      data-testid="appSidebar"
    >
      <div className="flex h-16 items-center justify-between border-b border-border/60 px-4">
        <div
          className={cn(
            'overflow-hidden transition-all',
            collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
          )}
        >
          <p className="text-sm font-semibold text-primary">BajaNumeros!</p>
          <p className="text-xs text-muted-foreground">Workspace</p>
        </div>
        <Button
          aria-label="Toggle sidebar"
          size="icon"
          variant="ghost"
          onClick={onToggle}
          data-testid="sidebar_toggle"
        >
          {collapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 space-y-1 p-3" data-testid="sidebar_nav">
        {APP_NAV_ITEMS.map(item => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all',
                isActive
                  ? 'bg-primary/15 text-primary'
                  : 'text-foreground hover:bg-accent/60 hover:text-accent-foreground'
              )}
              data-testid="sidebar_link"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span
                className={cn(
                  'transition-opacity',
                  collapsed ? 'opacity-0 lg:hidden' : 'opacity-100'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
