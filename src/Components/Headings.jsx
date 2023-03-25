import { View, Text } from "react-native";
import React from "react";

export default function Headings({ text = null, style, children }) {
  return (
    <Text style={style} className="text-lg font-bold py-2">
      {text}
      {children}
    </Text>
  );
}
