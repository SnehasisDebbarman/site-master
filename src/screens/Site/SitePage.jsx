import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../Components/Header";
import placeholder from "../../../assets/placeholder.png";
import { Feather } from "@expo/vector-icons";

export default function SitePage({ navigation }) {
  const NavigateAddSite = () => {
    // navigation.navigate("Home");
    navigation.navigate("AddSite");
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Sites" navigation={navigation} navigationActive={true} />
      <View className="flex-grow p-5 bg-white ">
        <View className="bg-gray-200 rounded-xl px-5 mb-5 flex flex-row items-center">
          <Feather name="search" size={24} color="gray" />
          <TextInput className="pl-2 py-5" placeholder="Search for Sites" />
        </View>

        <View>
          <View className="my-2 flex flex-row p-2 border-2 border-gray-200 rounded-3xl">
            <Image source={placeholder} />
            <View className="pl-4 flex justify-center">
              <Text className="text-2xl font-semibold pb-1">
                Niladri Reservior
              </Text>
              <View className="flex flex-row gap-2 items-center">
                <Feather name="map-pin" size={20} color="gray" />
                <Text>Sector 5 , Kolkata</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={NavigateAddSite}
          className="absolute bottom-4 right-5 flex-row items-center bg-site-500 py-2 px-4 rounded-full"
        >
          <Feather name="plus" size={24} color="black" />
          <Text className="pl-2">Add Site</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
