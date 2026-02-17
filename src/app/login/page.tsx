'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AlertCircle, KeyRound } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/auth-context';

export default function LoginPage() {
  const router = useRouter();
  const { login, error, clearError } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearError();
    setIsSubmitting(true);

    try {
      await login(email, password);
      const redirectPath =
        typeof window !== 'undefined'
          ? (new URLSearchParams(window.location.search).get('redirect') ?? '/dashboard')
          : '/dashboard';
      router.push(redirectPath);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-background via-secondary/30 to-background px-4 py-10">
      <Card className="w-full max-w-md" data-testid="loginForm">
        <CardHeader className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <KeyRound className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="font-[var(--font-heading)] text-2xl">Iniciar sesion</CardTitle>
            <CardDescription>
              Entra para convertir audios de WhatsApp en presupuestos listos para enviar.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          <div
            className="rounded-2xl border border-primary/30 bg-primary/10 p-3 text-xs text-primary"
            data-testid="demoCredentials"
          >
            <p className="font-semibold">Credenciales de demo</p>
            <p>Email: demo@bajanumeros.app</p>
            <p>Password: Demo12345!</p>
          </div>

          <form className="space-y-4" onSubmit={onSubmit} data-testid="login_form">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                data-testid="email_input"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                data-testid="password_input"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                minLength={8}
                required
              />
            </div>

            <Button
              data-testid="submit_button"
              className="w-full"
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Ingresando...' : 'Ingresar al workspace'}
            </Button>

            {error ? (
              <p
                className="flex items-center gap-2 text-sm text-destructive"
                data-testid="error_message"
              >
                <AlertCircle className="h-4 w-4" />
                {error}
              </p>
            ) : null}
          </form>

          <p className="text-sm text-muted-foreground">
            No tienes cuenta?{' '}
            <Link href="/signup" className="font-semibold text-primary hover:underline">
              Crear cuenta
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
