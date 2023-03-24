import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../Components/Header";
import { TailwindClasses } from "../../TaiwindClass/Tailwind";
import Headings from "../../Components/Headings";

export default function AddSite({ navigation }) {
  const handleCreate = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header
        title="Add Site"
        navigation={navigation}
        navigationActive={true}
      />
      <View className="w-full p-5">
        <ScrollView>
          <Headings>Site Name</Headings>
          <TextInput
            placeholder="eg: Niladri Reserviours"
            className={TailwindClasses.input}
          />
          <Headings>Site Owner</Headings>

          <TextInput
            placeholder="eg: John Wick"
            className={TailwindClasses.input}
          />

          <Headings>Site Manager</Headings>
          <TextInput
            placeholder="eg : John Smith"
            className={TailwindClasses.input}
          />
          <Headings>Location</Headings>
          <TextInput
            placeholder="eg: sector 5 , Kolkata"
            className={TailwindClasses.input}
          />
          <Headings>Contact</Headings>
          <TextInput
            placeholder="eg : +91 90909 09090"
            className={TailwindClasses.input}
          />
          <View className="h-40"></View>
        </ScrollView>
      </View>
      <View className="absolute bottom-1 w-full flex items-center px-5">
        <TouchableOpacity
          onPress={handleCreate}
          className="w-full items-center py-5 px-10 bg-site-500 rounded-xl"
        >
          <Text className="font-bold">Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
