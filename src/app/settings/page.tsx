import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <MainLayout
      pageTitle="Configuracion"
      pageDescription="Preferencias de salida, canal de entrega y moneda por defecto."
    >
      <Card>
        <CardHeader>
          <CardTitle className="font-[var(--font-heading)]">Preferencias iniciales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Placeholder visual para implementar formularios reales en historias de onboarding.
          </p>
        </CardContent>
      </Card>
    </MainLayout>
  );
}
