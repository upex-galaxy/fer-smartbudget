import { MainLayout } from '@/components/layout/main-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BudgetsPage() {
  return (
    <MainLayout
      pageTitle="Presupuestos"
      pageDescription="Seccion base del MVP para revisar, editar y versionar presupuestos extraidos."
    >
      <Card>
        <CardHeader>
          <CardTitle className="font-[var(--font-heading)]">Modulo en construccion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Esta pagina queda lista como scaffolding visual para las stories de edicion y
            versionado.
          </p>
        </CardContent>
      </Card>
    </MainLayout>
  );
}
