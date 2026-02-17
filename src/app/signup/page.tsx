'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/auth-context';

export default function SignupPage() {
  const router = useRouter();
  const { signup, error, clearError } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearError();
    setIsSubmitting(true);

    try {
      await signup(email, password);
      router.push('/dashboard');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-background via-secondary/25 to-background px-4 py-10">
      <Card className="w-full max-w-md" data-testid="signupForm">
        <CardHeader className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="font-[var(--font-heading)] text-2xl">Crear cuenta</CardTitle>
            <CardDescription>
              Activa tu espacio para organizar presupuestos de obra con historial y exportacion.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit} data-testid="signup_form">
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
                autoComplete="new-password"
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
              {isSubmitting ? 'Creando...' : 'Crear cuenta Free'}
            </Button>

            {error ? (
              <p className="text-sm text-destructive" data-testid="error_message">
                {error}
              </p>
            ) : null}
          </form>

          <p className="mt-4 text-sm text-muted-foreground">
            Ya tienes cuenta?{' '}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Ingresar
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
