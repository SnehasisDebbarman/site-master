import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../Components/Header";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import placeholder from "../../../assets/placeholder.png";

export default function LabourPage({ navigation }) {
  return (
    <SafeAreaView className="flex-1">
      <Header
        title="Labours "
        navigation={navigation}
        navigationActive={true}
      />
      <ScrollView className="p-5">
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Labours</Text>
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

        {/* labours list */}
        <View className="bg-gray-200 rounded-xl px-5 mb-5 flex flex-row items-center">
          <Feather name="search" size={24} color="gray" />
          <TextInput className="pl-2 py-5" placeholder="Search for Labours" />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LabourDetails");
            }}
            className="my-2 flex flex-row p-2 border-2 border-gray-200 rounded-3xl"
          >
            <Ionicons name="person-circle-outline" size={60} color="black" />
            <View className="pl-4 flex justify-center">
              <Text className="text-2xl text-bold">Mrinal Thakur</Text>
              <View className="flex flex-row gap-2 items-center">
                <Text>Carpenter</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        // onPress={}
        className="absolute bottom-4 right-5 flex-row items-center bg-site-500 py-2 px-4 rounded-full"
      >
        <Feather name="plus" size={24} color="black" />
        <Text className="pl-2 font-bold">Add Labour</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
