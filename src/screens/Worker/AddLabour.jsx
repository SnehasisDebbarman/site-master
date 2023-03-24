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

export default function AddLabour({ navigation }) {
  const handleCreate = () => {
    navigation.navigate("Labours");
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
          <Headings>Labour Name</Headings>
          <TextInput
            placeholder="eg: Niladri Reserviours"
            className={CustomClasses.input}
          />
          <Headings>Occupation</Headings>

          <TextInput
            placeholder="eg: Carpenter"
            className={CustomClasses.input}
          />

          <Headings>Daily Wages</Headings>
          <TextInput placeholder="eg : 516" className={CustomClasses.input} />
          <Headings>Skilled</Headings>
          <TextInput
            placeholder="eg: Yes or No"
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
