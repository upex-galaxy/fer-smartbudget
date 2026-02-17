import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SubscriptionPage() {
  return (
    <MainLayout
      pageTitle="Plan y consumo"
      pageDescription="Transparencia de cuota mensual, plan activo y opciones de upgrade."
    >
      <Card>
        <CardHeader>
          <CardTitle className="font-[var(--font-heading)]">Resumen de suscripcion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Seccion demo preparada para las historias de billing, metodos de pago y comprobantes.
          </p>
        </CardContent>
      </Card>
    </MainLayout>
  );
}
