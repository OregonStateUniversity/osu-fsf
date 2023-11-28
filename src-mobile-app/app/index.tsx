import { Slot, Stack } from "expo-router"
import { Button, Text, View } from "react-native"
import TWButton from "../components/Leaderboard"
import Pedometer from '../components/Pedometer';

export default function Index() {
  return (
    <View className="flex flex-col h-screen items-center justify-start mt-12">
      <Stack.Screen options={{ title: 'Hello World' }} />
      <Text className="text-">From tailwind</Text>
      <TWButton />
      <Pedometer />
    </View>
  )
}