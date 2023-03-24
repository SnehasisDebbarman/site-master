import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function FloatingActionBtn({
  text,
  Icon = null,
  onPress = null,
  children,
}) {
  function IconHolder() {
    return Icon;
  }
  function pressHandler() {
    if (onPress === null) {
      return;
    } else {
      onPress();
    }
  }
  return (
    <TouchableOpacity
      onPress={pressHandler}
      className="flex-row items-center absolute bg-yellow-400 bottom-5 right-5 px-3 py-2 shadow rounded-md"
    >
      {IconHolder()}
      <Text className="ml-2 text-xs font-bold">{text}</Text>
      {children}
    </TouchableOpacity>
  );
}
