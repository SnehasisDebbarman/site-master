import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../Components/Header";

export default function AuthenticationHome({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView className="flex-1">
      <Header title="Hello!" navigation={navigation} />
      <View className="flex-grow items-center justify-between">
        <Text></Text>
        <View className="py-20 w-full px-5">
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-site-500 px-10 py-3 rounded-lg"
          >
            <Text className="text-center font-bold text-xl">Login</Text>
          </TouchableOpacity>
          <Text className="my-2 text-lg text-slate-500 text-center">OR</Text>
          <TouchableOpacity
            onPress={handleSignUp}
            className="bg-site-500 px-10 py-3 mb-2 rounded-lg "
          >
            <Text className="text-center font-bold text-xl">Sign up</Text>
          </TouchableOpacity>
          <Text className="text-center">Continue as A Guest</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
