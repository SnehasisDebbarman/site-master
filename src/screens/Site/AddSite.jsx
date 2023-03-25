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
import CustomClasses from "../../TaiwindClass/Tailwind";
import Headings from "../../Components/Headings";
import FloatingActionBtn from "../../Components/FloatingActionBtn";

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
            className={CustomClasses.input}
          />
          <Headings>Site Owner</Headings>

          <TextInput
            placeholder="eg: John Wick"
            className={CustomClasses.input}
          />

          <Headings>Site Manager</Headings>
          <TextInput
            placeholder="eg : John Smith"
            className={CustomClasses.input}
          />
          <Headings>Location</Headings>
          <TextInput
            placeholder="eg: sector 5 , Kolkata"
            className={CustomClasses.input}
          />
          <Headings>Contact</Headings>
          <TextInput
            placeholder="eg : +91 90909 09090"
            className={CustomClasses.input}
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
