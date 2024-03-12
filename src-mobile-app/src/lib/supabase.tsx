import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { Session, User, createClient } from '@supabase/supabase-js';
import { createContext, useContext, useState } from 'react';
import { Database } from './supabase-types';
import { Alert } from 'react-native';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

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

export const supabase = createClient<Database>(supabaseUrl!, supabaseAnonKey!, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});

export interface AuthSessionState {
  session: Session | null
  user: User | null,
  isReady: boolean
  signIn: (email: string, pass: string) => Promise<void>
  signOut: () => Promise<void>
  getSession: () => Promise<void>
}

const initialState = {
  session: null as Session | null,
  user: null as User | null,
  isReady: false,
} as AuthSessionState


export const AuthSessionContext = createContext(initialState);

export function AuthSessionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialState);

  return(
    <AuthSessionContext.Provider
      value={{
        ...state,
        signIn: async (email, password) => {

          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
          });

          if (error) {
            Alert.alert(error.message);
            return;
          }

          setState({
            ...state,
            session: data.session,
            user: data.user,
            isReady: true
          });
        },
        signOut: async () => {
          await supabase.auth.signOut();
          setState({
            ...state,
            session: null,
            user: null,
            isReady: true
          });
        },
        getSession: async () => {
          const { data, error } = await supabase.auth.getSession();
          if (error) {
            Alert.alert(error.message);
            return;
          }

          setState({
            ...state,
            session: data.session,
            isReady: true
          });
        }
      }}
    >
      {children}
    </AuthSessionContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthSessionContext);
  if (context === undefined)
    throw Error('useAuth must be used within AuthProvider');
  return context;
}