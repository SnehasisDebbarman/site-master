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
import InfoCard from "../../Components/InfoCard";
import CustomClasses from "../../TaiwindClass/Tailwind";
import PersonList from "../../Components/PersonList";

export default function VendorPage({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header
        title="Contractors "
        navigation={navigation}
        navigationActive={true}
      />
      <ScrollView className="p-5">
        <View className="w-full flex flex-row justify-between items-center ">
          <Text className="text-lg font-bold">Contractors</Text>
          <Text>Details</Text>
        </View>
        <View className="w-full flex flex-row pt-4">
          <InfoCard title={"Total Contractors"} content={2012} />
          <InfoCard title={"Active"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Inactove"} content={1214} />
        </View>

        {/* labours list */}
        <View className="bg-gray-50 rounded-xl px-5 mb-5 flex flex-row items-center">
          <Feather name="search" size={24} color="gray" />
          <TextInput className="pl-2 py-5" placeholder="Search for Labours" />
        </View>
        <View>
          {[1, 2, 4, 5, 6].map((it) => {
            return (
              <TouchableOpacity
                key={it}
                onPress={() => {
                  navigation.navigate("VendorInfo");
                }}
              >
                <PersonList />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        // onPress={}
        onPress={() => {
          navigation.navigate("AddVendor");
        }}
        className="absolute bottom-4 right-5 flex-row items-center bg-site-500 py-2 px-4 rounded-full"
      >
        <Feather name="plus" size={24} color="black" />
        <Text className="pl-2 font-bold">Add Labour</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
