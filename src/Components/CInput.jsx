import { View, Text, TextInput } from "react-native";
import React from "react";

export default function CInput({ style, placeholder }) {
  return (
    <TextInput style={style} className="bg-gray-200 rounded-xl p-5 mb-2" />
  );
}
