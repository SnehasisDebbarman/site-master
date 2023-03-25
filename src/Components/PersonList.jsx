import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function PersonList() {
  return (
    <View className="flex flex-row p-2  border-gray-200 rounded-3xl border-b ">
      <Ionicons name="person-circle-outline" size={60} color="gray" />
      <View className="pl-4 flex justify-center  flex-grow">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg text-bold text-gray-800 flex-grow">
            Mrinal Thakur
          </Text>
          <View className="flex-row items-center px-2 bg-gray-300 py-1 rounded-full">
            <View className="h-2 w-2 bg-red-500 rounded-full"></View>
            <Text className="ml-2 text-[10px]">Absent</Text>
          </View>
        </View>

        <View className="flex flex-row gap-2 items-center">
          <Text className="text-gray-400">Carpenter</Text>
        </View>
      </View>
    </View>
  );
}
