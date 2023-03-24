import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({
  text = "",
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
      className="flex-row px-4 py-2 border border-amber-400 rounded-md bg-amber-100 mb-2"
    >
      {IconHolder()}
      <Text className="px-2"> {text}</Text>
      {children}
    </TouchableOpacity>
  );
}
