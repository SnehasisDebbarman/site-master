import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Header from "../Components/Header";
import placeholder from "../../assets/placeholder.png";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Home" navigation={navigation} navigationActive={true} />
      <View className="w-full h-full p-5">
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Site Overview</Text>
          <Text>Details</Text>
        </View>
        <View className="w-full flex flex-row justify-between gap-3 py-5">
          <View className="h-28 flex-grow  bg-yellow-400 rounded-xl flex justify-center">
            <Text className="text-center font-medium">Total Site</Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className="h-28 flex-grow  bg-gray-200 rounded-xl flex justify-center">
            <Text className="text-center font-medium">Total Site</Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className="h-28 flex-grow  bg-yellow-400 rounded-xl flex justify-center">
            <Text className="text-center font-medium">Total Site</Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
        </View>
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Recent Sites</Text>
          <Text>See All</Text>
        </View>
        <View>
          <View className="my-2 flex flex-row p-2 border-2 border-gray-200 rounded-3xl">
            <Image source={placeholder} />
            <View className="pl-4 flex justify-center">
              <Text className="text-2xl text-bold">Niladri Reservior</Text>
              <View className="flex flex-row gap-2 items-center">
                <Feather name="map-pin" size={20} color="gray" />
                <Text>Sector 5 , Kolkata</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
