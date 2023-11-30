import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { Session, User, createClient } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "@env";

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseAnonKey = PUBLIC_SUPABASE_ANON_KEY;

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});

const initialState = { session: null as Session | null, user: null as User | null }
export const AuthContext = createContext(initialState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setState({ session, user: session?.user ?? null });
    });
  }, []);

  supabase.auth.onAuthStateChange((event, session) => {
    setState({ session, user: session?.user ?? null });
  });

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw Error('useAuth must be used within AuthProvider');
  return context;
}