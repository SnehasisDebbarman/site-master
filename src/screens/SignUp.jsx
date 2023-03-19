import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../Components/Header";

import { AntDesign } from "@expo/vector-icons";
export default function SignUp({ navigation }) {
  return (
    <SafeAreaView className="flex-1">
      <Header title="Sign In" navigation={navigation} />
      <ScrollView className=" flex-grow p-5">
        <TextInput
          placeholder="Your Name"
          className="bg-gray-200 rounded-xl p-5 mb-5"
        />
        <TextInput
          placeholder="Email"
          className="bg-gray-200 rounded-xl p-5 mb-5"
        />
        <TextInput
          placeholder="Password"
          className="bg-gray-200 rounded-xl p-5 mb-5"
        />
        <TextInput
          placeholder="confirm Password"
          className="bg-gray-200 rounded-xl p-5 mb-5"
        />
        <Text className="text-center py-10">OR</Text>
        <View className="flex flex-row items-center py-4 px-5">
          <View className="flex-grow h-px bg-gray-400"></View>

          <Text className="flex-shrink text-lg text-gray-500 px-4 font-light">
            Sign up Using
          </Text>

          <View className="flex-grow h-px bg-gray-400"></View>
        </View>

        <View className="flex flex-row justify-center gap-5 items-center py-5">
          <AntDesign name="google" size={24} color="black" />
          <AntDesign name="apple1" size={24} color="black" />
          <AntDesign name="facebook-square" size={24} color="black" />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("MainStack", { screen: "Home" })}
            className="w-full items-center mt-16 py-5 px-10 bg-site-500 "
          >
            <Text className="font-bold">Sign Up</Text>
          </TouchableOpacity>
          <Text className="py-3 text-center">
            Already Have An Account?{" "}
            <Text
              onPress={() => navigation.navigate("Login")}
              className="font-bold"
            >
              Sign in
            </Text>
          </Text>
        </View>
        <View className="h-20"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
