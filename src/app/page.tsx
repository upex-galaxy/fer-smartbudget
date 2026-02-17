import Link from 'next/link';
import type * as React from 'react';

import { ArrowRight, AudioLines, FileSpreadsheet, History, ShieldCheck } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <section
        className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-soft md:p-10"
        data-testid="landingPage"
      >
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge>Audio-first para obra</Badge>
          <Badge variant="secondary">WhatsApp a presupuesto</Badge>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h1 className="font-[var(--font-heading)] text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
              Convierte audios de WhatsApp en presupuestos claros y editables.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              BajaNumeros! elimina la recaptura manual: subes un audio, revisas items extraidos y
              exportas en minutos a Excel o Google Sheets.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" data-testid="start_now_button">
                <Link href="/signup">
                  Crear cuenta gratis <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="login_button">
                <Link href="/login">Ya tengo cuenta</Link>
              </Button>
            </div>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <CardHeader>
              <CardTitle className="font-[var(--font-heading)]">Flujo en 3 pasos</CardTitle>
              <CardDescription>Sin cambiar tu forma de trabajar en obra.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                1) Subes audio exportado de WhatsApp. 2) Revisas y corriges campos claves. 3)
                Exportas y compartes con cliente o proveedor.
              </p>
              <p>Objetivo MVP: llevar tu primer presupuesto editable en menos de 20 minutos.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        data-testid="featuresSection"
      >
        <FeatureCard
          icon={AudioLines}
          title="Carga de audio WhatsApp"
          description="Sube .ogg, .mp3 o .m4a y sigue el estado de procesamiento en tiempo real."
        />
        <FeatureCard
          icon={FileSpreadsheet}
          title="Presupuestos estructurados"
          description="Descripcion, cantidad, precio, moneda y proveedor listos para validar y corregir."
        />
        <FeatureCard
          icon={History}
          title="Historial reutilizable"
          description="Guarda versiones, recupera trabajos pasados y duplica presupuestos en segundos."
        />
        <FeatureCard
          icon={ShieldCheck}
          title="Cuenta y consumo claros"
          description="Visualiza plan activo y uso mensual para evitar sorpresas al cerrar presupuestos."
        />
      </section>

      <section
        className="mt-10 rounded-3xl border border-border bg-card/80 p-6 text-center md:p-10"
        data-testid="finalCtaSection"
      >
        <h2 className="font-[var(--font-heading)] text-2xl font-extrabold text-foreground md:text-3xl">
          Menos noches rehaciendo planillas. Mas tiempo cerrando obras.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
          Diseñado para contratistas, arquitectas independientes y maestros mayores que hoy operan
          por audios y necesitan una salida profesional.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild size="lg" data-testid="cta_create_account_button">
            <Link href="/signup">Empezar con cuenta Free</Link>
          </Button>
        </div>
      </section>

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} BajaNumeros! MVP</p>
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Terminos" className="hover:text-primary">
            Terminos
          </Link>
          <Link href="/" aria-label="Privacidad" className="hover:text-primary">
            Privacidad
          </Link>
          <a
            href="mailto:hola@bajanumeros.app"
            aria-label="Contacto"
            className="hover:text-primary"
          >
            Contacto
          </a>
        </div>
      </footer>
    </main>
  );
}

type FeatureCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-border/80 bg-card/95" data-testid="featureCard">
      <CardHeader>
        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
