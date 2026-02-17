import { Clock3, FileSpreadsheet, TrendingUp, UploadCloud } from 'lucide-react';
import type * as React from 'react';

import { MainLayout } from '@/components/layout/main-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createServer } from '@/lib/supabase/server';
import type { BudgetRow } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = await createServer();
  const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();

  const [
    recentBudgetsQuery,
    processedJobsQuery,
    draftBudgetsQuery,
    sentBudgetsQuery,
    readyJobsQuery,
  ] = await Promise.all([
    supabase
      .from('budgets')
      .select('id, title, status, total, currency, created_at')
      .order('created_at', { ascending: false })
      .limit(6),
    supabase
      .from('audio_jobs')
      .select('id', { count: 'exact', head: true })
      .gte('created_at', monthStart),
    supabase.from('budgets').select('id', { count: 'exact', head: true }).eq('status', 'draft'),
    supabase.from('budgets').select('id', { count: 'exact', head: true }).eq('status', 'sent'),
    supabase
      .from('audio_jobs')
      .select('created_at, updated_at')
      .eq('status', 'ready')
      .gte('created_at', monthStart)
      .limit(100),
  ]);

  const recentBudgets =
    (recentBudgetsQuery.data as
      | Pick<BudgetRow, 'id' | 'title' | 'status' | 'total' | 'currency' | 'created_at'>[]
      | null) ?? [];

  const readyMinutes = (readyJobsQuery.data ?? [])
    .map(job =>
      Math.round((new Date(job.updated_at).getTime() - new Date(job.created_at).getTime()) / 60000)
    )
    .filter(minutes => Number.isFinite(minutes) && minutes >= 0)
    .sort((a, b) => a - b);

  const medianMinutes =
    readyMinutes.length === 0
      ? null
      : (readyMinutes[Math.floor((readyMinutes.length - 1) / 2)] ?? null);

  const queryError =
    recentBudgetsQuery.error ??
    processedJobsQuery.error ??
    draftBudgetsQuery.error ??
    sentBudgetsQuery.error ??
    readyJobsQuery.error;

  return (
    <MainLayout
      pageTitle="Panel de presupuestos"
      pageDescription="Vista operativa para transformar acuerdos hablados en presupuestos auditables."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" data-testid="dashboardMetrics">
        <MetricCard
          title="Procesados este mes"
          value={String(processedJobsQuery.count ?? 0)}
          icon={UploadCloud}
          helper="jobs de audio"
        />
        <MetricCard
          title="Borradores"
          value={String(draftBudgetsQuery.count ?? 0)}
          icon={Clock3}
          helper="pendientes de revision"
        />
        <MetricCard
          title="Enviados"
          value={String(sentBudgetsQuery.count ?? 0)}
          icon={FileSpreadsheet}
          helper="listos para compartir"
        />
        <MetricCard
          title="Tiempo mediano"
          value={medianMinutes === null ? '--' : `${medianMinutes} min`}
          icon={TrendingUp}
          helper="audio -> editable"
        />
      </section>

      <Card className="mt-6" data-testid="budgetListCard">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="font-[var(--font-heading)] text-xl">
              Ultimos presupuestos
            </CardTitle>
            <CardDescription>Datos reales del usuario autenticado.</CardDescription>
          </div>
          <Button size="sm" data-testid="newBudgetButton">
            Nuevo presupuesto
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {queryError ? (
            <p className="text-sm text-destructive" data-testid="dashboardDataError">
              No se pudieron cargar algunos datos del panel. Intenta nuevamente en unos segundos.
            </p>
          ) : null}
          {recentBudgets.length === 0 ? (
            <p className="text-sm text-muted-foreground" data-testid="dashboardEmptyState">
              Todavia no tienes presupuestos. Crea el primero para comenzar.
            </p>
          ) : null}
          {recentBudgets.map(budget => (
            <article
              key={budget.id}
              className="flex flex-col gap-3 rounded-2xl border border-border p-4 md:flex-row md:items-center md:justify-between"
              data-testid="budgetCard"
            >
              <div>
                <p className="font-semibold text-foreground">{budget.title}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(budget.created_at).toLocaleDateString('es-AR')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant={
                    budget.status === 'ready' || budget.status === 'sent' ? 'default' : 'secondary'
                  }
                >
                  {formatBudgetStatus(budget.status)}
                </Badge>
                <p className="text-sm font-semibold">
                  {budget.currency} {budget.total.toLocaleString('es-AR')}
                </p>
              </div>
            </article>
          ))}
        </CardContent>
      </Card>
    </MainLayout>
  );
}

function formatBudgetStatus(status: string) {
  if (status === 'draft') return 'borrador';
  if (status === 'ready') return 'listo';
  if (status === 'sent') return 'enviado';
  return status;
}

type MetricCardProps = {
  title: string;
  value: string;
  helper: string;
  icon: React.ComponentType<{ className?: string }>;
};

function MetricCard({ title, value, helper, icon: Icon }: MetricCardProps) {
  return (
    <Card data-testid="metricCard">
      <CardContent className="pt-6">
        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{helper}</p>
      </CardContent>
    </Card>
  );
}
