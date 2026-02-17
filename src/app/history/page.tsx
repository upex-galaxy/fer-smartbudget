import { MainLayout } from '@/components/layout/main-layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createServer } from '@/lib/supabase/server';
import type { AudioJobRow } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function HistoryPage() {
  const supabase = await createServer();
  const { data, error } = await supabase
    .from('audio_jobs')
    .select('id, status, progress_pct, retry_count, created_at')
    .order('created_at', { ascending: false })
    .limit(20);

  const jobs =
    (data as
      | Pick<AudioJobRow, 'id' | 'status' | 'progress_pct' | 'retry_count' | 'created_at'>[]
      | null) ?? [];

  return (
    <MainLayout
      pageTitle="Historial de procesamiento"
      pageDescription="Seguimiento de jobs de audio con estados y reintentos."
    >
      <Card data-testid="historyListCard">
        <CardHeader>
          <CardTitle className="font-[var(--font-heading)] text-xl">Ultimos jobs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {error ? (
            <p className="text-sm text-destructive" data-testid="historyDataError">
              No se pudo cargar el historial en este momento.
            </p>
          ) : null}
          {jobs.length === 0 ? (
            <p className="text-sm text-muted-foreground" data-testid="historyEmptyState">
              Aun no hay jobs para mostrar.
            </p>
          ) : null}
          {jobs.map(job => (
            <article
              key={job.id}
              className="rounded-2xl border border-border p-4"
              data-testid="historyJobCard"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold text-foreground">{job.id}</p>
                <Badge variant={job.status === 'ready' ? 'default' : 'secondary'}>
                  {formatAudioJobStatus(job.status)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Progreso: {job.progress_pct}% · Reintentos: {job.retry_count}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Creado: {new Date(job.created_at).toLocaleString('es-AR')}
              </p>
            </article>
          ))}
        </CardContent>
      </Card>
    </MainLayout>
  );
}

function formatAudioJobStatus(status: string) {
  if (status === 'queued') return 'en cola';
  if (status === 'processing') return 'procesando';
  if (status === 'ready') return 'listo';
  if (status === 'error') return 'con error';
  return status;
}
