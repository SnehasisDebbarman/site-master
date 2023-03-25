import { View, Text } from "react-native";
import React from "react";

export default function InfoCard({ title, content, styles = "" }) {
  return (
    <View
      className={
        "m-1 p-1 w-[30%] h-24  bg-yellow-200 rounded-xl flex justify-center " +
        styles
      }
    >
      <Text className="text-center text-[11px] font-medium text-gray-600">
        {title}
      </Text>
      <Text className="text-center text-lg font-bold">{content}</Text>
    </View>
  );
}
