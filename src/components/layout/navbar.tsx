'use client';

import { Menu, UserRound } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';

type NavbarProps = {
  onOpenMobileMenu: () => void;
};

export function Navbar({ onOpenMobileMenu }: NavbarProps) {
  const { user, logout } = useAuth();

  return (
    <header
      className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/85 px-4 backdrop-blur lg:px-6"
      data-testid="appNavbar"
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenMobileMenu}
          className="lg:hidden"
          aria-label="Abrir menu"
          data-testid="open_mobile_menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div>
          <p className="text-sm font-semibold text-primary">BajaNumeros!</p>
          <p className="text-xs text-muted-foreground">Audio de WhatsApp a presupuesto listo</p>
        </div>
      </div>

      <div className="flex items-center gap-3" data-testid="user_menu">
        <Badge variant="secondary">Plan Free</Badge>
        <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 md:flex">
          <UserRound className="h-4 w-4 text-primary" />
          <span className="max-w-40 truncate text-xs text-muted-foreground">
            {user?.email ?? 'Invitado'}
          </span>
        </div>
        <Button
          onClick={() => void logout()}
          size="sm"
          variant="outline"
          data-testid="logout_button"
        >
          Salir
        </Button>
      </div>
    </header>
  );
}
