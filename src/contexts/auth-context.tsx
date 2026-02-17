'use client';

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { AuthSession, AuthUser } from '@supabase/supabase-js';

import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/types/supabase';

type UserProfile = Database['public']['Tables']['user_profiles']['Row'];
type Session = AuthSession;
type User = AuthUser;

type AuthApi = {
  getSession: () => Promise<{
    data: { session: Session | null };
    error: { message: string } | null;
  }>;
  onAuthStateChange: (callback: (event: string, session: Session | null) => void) => {
    data: { subscription: { unsubscribe: () => void } };
  };
  signInWithPassword: (credentials: {
    email: string;
    password: string;
  }) => Promise<{ error: { message: string } | null }>;
  signUp: (credentials: {
    email: string;
    password: string;
  }) => Promise<{ error: { message: string } | null }>;
  signOut: () => Promise<{ error: { message: string } | null }>;
};

type AuthContextValue = {
  isLoading: boolean;
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const { supabase, initError } = useMemo(() => {
    try {
      return { supabase: createClient(), initError: null as string | null };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unknown Supabase client initialization error.';
      return { supabase: null, initError: message };
    }
  }, []);
  const auth = useMemo(() => {
    if (!supabase) {
      return null;
    }

    return supabase.auth as unknown as AuthApi;
  }, [supabase]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const fetchProfile = useCallback(
    async (userId: string) => {
      if (!supabase) {
        return;
      }

      const { data, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (profileError) {
        setError(profileError.message);
        return;
      }

      setProfile((data as UserProfile | null) ?? null);
    },
    [supabase]
  );

  useEffect(() => {
    if (!auth) {
      if (initError) {
        setError(initError);
      }
      setIsLoading(false);
      return;
    }

    const authClient = auth;

    let isMounted = true;

    async function loadInitialSession() {
      const {
        data: { session: currentSession },
        error: sessionError,
      } = await authClient.getSession();

      if (!isMounted) {
        return;
      }

      if (sessionError) {
        setError(sessionError.message);
      }

      setSession(currentSession);
      setUser(currentSession?.user ?? null);

      if (currentSession?.user) {
        await fetchProfile(currentSession.user.id);
      }

      setIsLoading(false);
    }

    void loadInitialSession();

    const {
      data: { subscription },
    } = authClient.onAuthStateChange((_event: string, nextSession: Session | null) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);

      if (!nextSession?.user) {
        setProfile(null);
        return;
      }

      void fetchProfile(nextSession.user.id);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [auth, fetchProfile, initError, supabase]);

  const login = useCallback(
    async (email: string, password: string) => {
      setError(null);
      if (!auth) {
        throw new Error(initError ?? 'Supabase auth is not configured.');
      }

      const { error: loginError } = await auth.signInWithPassword({ email, password });

      if (loginError) {
        setError(loginError.message);
        throw loginError;
      }
    },
    [auth, initError]
  );

  const signup = useCallback(
    async (email: string, password: string) => {
      setError(null);
      if (!auth) {
        throw new Error(initError ?? 'Supabase auth is not configured.');
      }

      const { error: signupError } = await auth.signUp({ email, password });

      if (signupError) {
        setError(signupError.message);
        throw signupError;
      }
    },
    [auth, initError]
  );

  const logout = useCallback(async () => {
    setError(null);
    if (!auth) {
      throw new Error(initError ?? 'Supabase auth is not configured.');
    }

    const { error: logoutError } = await auth.signOut();

    if (logoutError) {
      setError(logoutError.message);
      throw logoutError;
    }
  }, [auth, initError]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoading,
      user,
      session,
      profile,
      error,
      login,
      signup,
      logout,
      clearError,
    }),
    [clearError, error, isLoading, login, logout, profile, session, signup, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider.');
  }

  return context;
}
