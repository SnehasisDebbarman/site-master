import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

export default function GetStarted({ navigation }) {
  const HandleContinue = () => {
    navigation.navigate("AuthenticationHome");
  };
  return (
    <View className="w-full flex-1 py-20  items-center justify-between bg-white">
      <View className="grid place-items-center flex-row pt-20 ">
        <Text className="text-2xl font-bold text-secondary">SITE </Text>
        <Text className="text-2xl font-bold text-site-500">MASTER</Text>
      </View>
      <View className="w-full px-5">
        <Text className="p-2 bg-slate mb-1 text-center text-bold">
          Get Started
        </Text>
        <TouchableOpacity
          onPress={HandleContinue}
          className="w-full py-3 px-10 bg-slate bg-site-500 rounded-lg shadow-sm"
        >
          <Text className="text-center text-lg font-bold">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
