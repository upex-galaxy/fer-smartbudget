export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.1';
  };
  public: {
    Tables: {
      audio_jobs: {
        Row: {
          created_at: string;
          error_code: string | null;
          file_path: string | null;
          id: string;
          progress_pct: number;
          retry_count: number;
          source_type: string;
          status: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          error_code?: string | null;
          file_path?: string | null;
          id?: string;
          progress_pct?: number;
          retry_count?: number;
          source_type?: string;
          status?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          error_code?: string | null;
          file_path?: string | null;
          id?: string;
          progress_pct?: number;
          retry_count?: number;
          source_type?: string;
          status?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      billing_invoices: {
        Row: {
          amount: number;
          currency: string;
          id: string;
          issued_at: string;
          provider_invoice_id: string;
          receipt_url: string | null;
          status: string;
          user_id: string;
        };
        Insert: {
          amount: number;
          currency?: string;
          id?: string;
          issued_at?: string;
          provider_invoice_id: string;
          receipt_url?: string | null;
          status?: string;
          user_id: string;
        };
        Update: {
          amount?: number;
          currency?: string;
          id?: string;
          issued_at?: string;
          provider_invoice_id?: string;
          receipt_url?: string | null;
          status?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      budget_items: {
        Row: {
          budget_id: string;
          confidence_score: number;
          created_at: string;
          description: string;
          id: string;
          line_total: number;
          quantity: number;
          supplier_name: string | null;
          unit_price: number;
          updated_at: string;
        };
        Insert: {
          budget_id: string;
          confidence_score?: number;
          created_at?: string;
          description: string;
          id?: string;
          line_total?: number;
          quantity?: number;
          supplier_name?: string | null;
          unit_price?: number;
          updated_at?: string;
        };
        Update: {
          budget_id?: string;
          confidence_score?: number;
          created_at?: string;
          description?: string;
          id?: string;
          line_total?: number;
          quantity?: number;
          supplier_name?: string | null;
          unit_price?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'budget_items_budget_id_fkey';
            columns: ['budget_id'];
            isOneToOne: false;
            referencedRelation: 'budgets';
            referencedColumns: ['id'];
          },
        ];
      };
      budget_versions: {
        Row: {
          budget_id: string;
          created_at: string;
          id: string;
          snapshot_payload: Json;
          version_label: string;
          version_number: number;
        };
        Insert: {
          budget_id: string;
          created_at?: string;
          id?: string;
          snapshot_payload?: Json;
          version_label: string;
          version_number: number;
        };
        Update: {
          budget_id?: string;
          created_at?: string;
          id?: string;
          snapshot_payload?: Json;
          version_label?: string;
          version_number?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'budget_versions_budget_id_fkey';
            columns: ['budget_id'];
            isOneToOne: false;
            referencedRelation: 'budgets';
            referencedColumns: ['id'];
          },
        ];
      };
      budgets: {
        Row: {
          audio_job_id: string | null;
          created_at: string;
          currency: string;
          id: string;
          status: string;
          subtotal: number;
          title: string;
          total: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          audio_job_id?: string | null;
          created_at?: string;
          currency?: string;
          id?: string;
          status?: string;
          subtotal?: number;
          title: string;
          total?: number;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          audio_job_id?: string | null;
          created_at?: string;
          currency?: string;
          id?: string;
          status?: string;
          subtotal?: number;
          title?: string;
          total?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'budgets_audio_job_id_fkey';
            columns: ['audio_job_id'];
            isOneToOne: false;
            referencedRelation: 'audio_jobs';
            referencedColumns: ['id'];
          },
        ];
      };
      channels: {
        Row: {
          address: string;
          created_at: string;
          id: string;
          is_primary: boolean;
          type: string;
          user_id: string;
        };
        Insert: {
          address: string;
          created_at?: string;
          id?: string;
          is_primary?: boolean;
          type: string;
          user_id: string;
        };
        Update: {
          address?: string;
          created_at?: string;
          id?: string;
          is_primary?: boolean;
          type?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      deliveries: {
        Row: {
          budget_id: string;
          channel: string;
          created_at: string;
          id: string;
          sent_at: string | null;
          status: string;
          target: string;
        };
        Insert: {
          budget_id: string;
          channel: string;
          created_at?: string;
          id?: string;
          sent_at?: string | null;
          status?: string;
          target?: string;
        };
        Update: {
          budget_id?: string;
          channel?: string;
          created_at?: string;
          id?: string;
          sent_at?: string | null;
          status?: string;
          target?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'deliveries_budget_id_fkey';
            columns: ['budget_id'];
            isOneToOne: false;
            referencedRelation: 'budgets';
            referencedColumns: ['id'];
          },
        ];
      };
      exports: {
        Row: {
          budget_id: string;
          created_at: string;
          file_url: string | null;
          format: string;
          id: string;
          status: string;
        };
        Insert: {
          budget_id: string;
          created_at?: string;
          file_url?: string | null;
          format: string;
          id?: string;
          status?: string;
        };
        Update: {
          budget_id?: string;
          created_at?: string;
          file_url?: string | null;
          format?: string;
          id?: string;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'exports_budget_id_fkey';
            columns: ['budget_id'];
            isOneToOne: false;
            referencedRelation: 'budgets';
            referencedColumns: ['id'];
          },
        ];
      };
      subscriptions: {
        Row: {
          created_at: string;
          id: string;
          monthly_quota: number;
          plan_name: string;
          renewal_date: string | null;
          status: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          monthly_quota?: number;
          plan_name?: string;
          renewal_date?: string | null;
          status: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          monthly_quota?: number;
          plan_name?: string;
          renewal_date?: string | null;
          status?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      transcriptions: {
        Row: {
          audio_id: string;
          content: string;
          created_at: string;
          id: string;
          quality: string | null;
        };
        Insert: {
          audio_id: string;
          content: string;
          created_at?: string;
          id?: string;
          quality?: string | null;
        };
        Update: {
          audio_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          quality?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'transcriptions_audio_id_fkey';
            columns: ['audio_id'];
            isOneToOne: false;
            referencedRelation: 'audio_jobs';
            referencedColumns: ['id'];
          },
        ];
      };
      usage_counters: {
        Row: {
          id: string;
          period_end: string;
          period_start: string;
          processed_count: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          period_end: string;
          period_start: string;
          processed_count?: number;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          id?: string;
          period_end?: string;
          period_start?: string;
          processed_count?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      usage_events: {
        Row: {
          created_at: string;
          event_type: string;
          id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          event_type: string;
          id?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          event_type?: string;
          id?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      user_profiles: {
        Row: {
          city: string | null;
          created_at: string;
          default_delivery_channel: string;
          default_output_format: string;
          full_name: string | null;
          id: string;
          phone: string | null;
          preferred_currency: string;
          trade: string | null;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          city?: string | null;
          created_at?: string;
          default_delivery_channel?: string;
          default_output_format?: string;
          full_name?: string | null;
          id?: string;
          phone?: string | null;
          preferred_currency?: string;
          trade?: string | null;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          city?: string | null;
          created_at?: string;
          default_delivery_channel?: string;
          default_output_format?: string;
          full_name?: string | null;
          id?: string;
          phone?: string | null;
          preferred_currency?: string;
          trade?: string | null;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
