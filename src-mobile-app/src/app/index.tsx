import { Redirect } from "expo-router"
import { useAuth } from "../lib/supabase";

export default function Index() {
  const { session } = useAuth();

  if (!session)
    return <Redirect href={'/(auth)/sign-in'} />
  else
    return <Redirect href={'/(tabs)/home'} />
}