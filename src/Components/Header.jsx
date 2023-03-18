import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Header({
  title,
  subTitle = "",
  navigation,
  navigationActive = false,
}) {
  return (
    <View
      className={
        "w-full flex flex-row justify-between  px-5  py-2  items-center  " +
        (navigationActive ? "" : " border-b-2  border-b-slate-200")
      }
    >
      {navigationActive ? (
        <View className="rounded-full bg-gray-200 p-2">
          <Ionicons name="menu" size={24} color="black" />
        </View>
      ) : (
        <></>
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
        <></>
      )}
    </View>
  );
}
