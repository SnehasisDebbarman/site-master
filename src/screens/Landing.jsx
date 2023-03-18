import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";

export default function LoginLanding({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("GetStarted");
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-secondary">
      <View>
        <View className="grid place-items-center flex-row pb-10">
          <Text className="text-4xl font-bold text-white">SITE </Text>
          <Text className="text-4xl font-bold text-site-500">MASTER</Text>
        </View>
        <ActivityIndicator size={"large"} color="#FFD369" />
      </View>
    </SafeAreaView>
  );
}
