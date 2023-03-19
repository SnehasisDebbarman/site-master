import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Header({
  title,
  subTitle = "",
  navigation,
  navigationActive = false,
}) {
  const handleMenuClick = () => {
    navigation.navigate("ProfileStack", { screen: "Profile" });
  };
  return (
    <View
      className={
        "bg-white w-full flex flex-row justify-between  px-5  py-2  items-center  " +
        (navigationActive ? "" : " border-b-2  border-b-slate-200")
      }
    >
      {navigationActive ? (
        <TouchableOpacity
          onPress={handleMenuClick}
          className="rounded-full bg-gray-200 p-2"
        >
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}

      <View>
        <Text>{subTitle}</Text>
        <Text className="text-lg font-extrabold ">{title}</Text>
      </View>
      {navigationActive ? (
        <View className="rounded-full bg-gray-200 p-2">
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
