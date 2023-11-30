import { Pressable, Text, TouchableOpacity } from "react-native";

export default function TWButton() {
  return (
    <TouchableOpacity className="bg-blue-500 p-2 px-3 rounded-lg border border-white/50">
      <Text className="text-white">Fancy Button</Text>
    </TouchableOpacity>
  )
}