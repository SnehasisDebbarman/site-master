import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../../Components/Header";

export default function AddSite({ navigation }) {
  const handleCreate = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView className="flex-1">
      <Header
        title="Add Site"
        navigation={navigation}
        navigationActive={true}
      />
      <View className="w-full p-5">
        <ScrollView>
          <Text className="text-xl font-bold py-2">Site Name</Text>
          <TextInput
            placeholder="eg: Niladri Reserviours"
            className="bg-gray-200 rounded-xl p-5 mb-2"
          />
          <Text className="text-xl font-bold py-2">Site Owner</Text>
          <TextInput
            placeholder="eg: John Wick"
            className="bg-gray-200 rounded-xl p-5 mb-2"
          />
          <Text className="text-xl font-bold py-2">Site Manager</Text>
          <TextInput
            placeholder="eg : John Smith"
            className="bg-gray-200 rounded-xl p-5 mb-2"
          />
          <Text className="text-xl font-bold py-2">Location</Text>
          <TextInput
            placeholder="eg: sector 5 , Kolkata"
            className="bg-gray-200 rounded-xl p-5 mb-2"
          />
          <Text className="text-xl font-bold py-2">Contact</Text>
          <TextInput
            placeholder="eg : +91 90909 09090"
            className="bg-gray-200 rounded-xl p-5 mb-10"
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
