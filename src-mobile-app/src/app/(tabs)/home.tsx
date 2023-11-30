import { Text } from "react-native";
import { supabase } from "../../lib/supabase";
import { Button } from "react-native-elements";
import { View } from "react-native";

function signOut() {
  supabase.auth.signOut();
}

export default function Home() {
  return (
    <View>
      <Text>Home!</Text>
      <Button onPress={() => signOut()} title="Sign Out" />
    </View>
  );
}