import { Text } from "react-native";
import { supabase } from "../../lib/supabase";
import { Button } from "react-native-elements";

function signOut() {
  supabase.auth.signOut();
}

export default function Profile() {
  return (
    <>
    <Text>Profile!</Text>
    <Button onPress={() => signOut()} title="Sign Out" />
    </>
  );
}