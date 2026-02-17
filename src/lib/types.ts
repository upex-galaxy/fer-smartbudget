import type { Database } from '@/types/supabase';

type PublicSchema = Database['public'];
type TableName = keyof PublicSchema['Tables'];

export type TableRow<T extends TableName> = PublicSchema['Tables'][T]['Row'];
export type TableInsert<T extends TableName> = PublicSchema['Tables'][T]['Insert'];
export type TableUpdate<T extends TableName> = PublicSchema['Tables'][T]['Update'];

export type AudioJobRow = TableRow<'audio_jobs'>;
export type BillingInvoiceRow = TableRow<'billing_invoices'>;
export type BudgetItemRow = TableRow<'budget_items'>;
export type BudgetVersionRow = TableRow<'budget_versions'>;
export type BudgetRow = TableRow<'budgets'>;
export type ChannelRow = TableRow<'channels'>;
export type DeliveryRow = TableRow<'deliveries'>;
export type ExportRow = TableRow<'exports'>;
export type SubscriptionRow = TableRow<'subscriptions'>;
export type TranscriptionRow = TableRow<'transcriptions'>;
export type UsageCounterRow = TableRow<'usage_counters'>;
export type UsageEventRow = TableRow<'usage_events'>;
export type UserProfileRow = TableRow<'user_profiles'>;
