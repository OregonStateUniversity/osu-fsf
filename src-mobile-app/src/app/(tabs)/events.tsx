import { Text, View } from "react-native";
import { supabase } from "../../lib/supabase";
import { Button } from "react-native-elements";

function signOut() {
  supabase.auth.signOut();
}

export default function Events() {
  return (
    <View>
      <Text>Events!</Text>
      <Button onPress={() => signOut()} title="Sign Out" />
    </View>
  );
}