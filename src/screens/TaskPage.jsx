import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../Components/Header";

export default function TaskPage({ navigation }) {
  return (
    <SafeAreaView>
      <Header title="Tasks" navigation={navigation} navigationActive={true} />
      <View className="p-5">
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Tasks</Text>
          <Text>Details</Text>
        </View>
        <View className="w-full flex flex-row justify-between py-5">
          <View className="mr-4 w-1/4 h-28 flex-grow   bg-gray-200 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">
              Total Labours
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className="mr-4 w-1/4 h-28 flex-grow  bg-yellow-400 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">
              Present
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className=" w-1/4 h-28 flex-grow   bg-gray-200 rounded-xl flex justify-center">
            <Text className="px-1 text-xs  text-center font-medium">
              Labour
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
        </View>

        <View className="w-full flex flex-row justify-center pb-5">
          <View className="mr-4 w-1/3 h-28    bg-gray-200 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">
              Total Labours
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>

          <View className=" w-1/3 h-28   bg-gray-200 rounded-xl flex justify-center">
            <Text className="px-1 text-xs  text-center font-medium">
              Labour
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
