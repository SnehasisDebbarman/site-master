import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import { Ionicons } from "@expo/vector-icons";

export default function LabourInfo({ navigation }) {
  return (
    <SafeAreaView className=" flex-1">
      <Header
        title="Labour Info "
        navigation={navigation}
        navigationActive={true}
      />
      <View className="p-5">
        <View className="flex flex-row ">
          <Ionicons name="person-circle-outline" size={60} color="black" />
          <View className="pl-4 flex justify-center">
            <Text className="text-2xl text-bold">Mrinal Thakur</Text>
            <View className="flex flex-row gap-2 items-center">
              <Text>Carpenter</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row gap-1 mt-4 justify-center border-2 rounded-xl border-gray-300 py-3">
          <View className="p-1 w-1/3 border-r-2 border-r-gray-200 ">
            <Text className="text-xs text-center">Total Work Hrs</Text>
            <Text className="text-3xl text-center font-bold text-yellow-600">
              13
            </Text>
          </View>
          <View className="p-1 w-1/3 border-r-2 border-r-gray-200">
            <Text className="text-xs text-center"> Regular Work Hrs</Text>
            <Text className="text-3xl text-center font-bold text-yellow-600">
              13
            </Text>
          </View>
          <View className="p-1 w-1/3 border-r-2 border-r-gray-200">
            <Text className="text-xs text-center">Overtime Hrs</Text>
            <Text className="text-3xl text-center font-bold text-yellow-600">
              13
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
