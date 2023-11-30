import { useEffect } from "react";
import { useAuth } from "../../lib/supabase";
import { Stack, router } from "expo-router";

export default function AuthLayout() {
  const { session } = useAuth();

  useEffect(() => {
    if (session)
      router.replace('/(tabs)/home');
  }, [session]);

  return <Stack />
}