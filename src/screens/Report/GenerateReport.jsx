import { View, Text } from "react-native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Header from "../../Components/Header";
import { VictoryPie } from "victory-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import InfoCard from "../../Components/InfoCard";
import FloatingActionBtn from "../../Components/FloatingActionBtn";
import Button from "../../Components/Button";
export default function GenerateReport({ navigation }) {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  return (
    <View className="flex-1 bg-white">
      <Header
        title="Generate Reports"
        navigation={navigation}
        navigationActive={true}
      />
      <View className="w-full flex flex-col p-5 gap-2">
        <View className="flex flex-row justify-between">
          <View>
            <View className="py-2">
              <Text className="text-start">From</Text>
            </View>

            <TouchableOpacity
              //   onPress={() => setModalVisible(true)}
              className="border-2 border-gray-200 p-2 rounded-lg flex-row"
            >
              <AntDesign name="calendar" size={16} color="gray" />
              <Text className="pl-2 text-gray-600">
                {moment(StartDate).format("Do MMM, YYYY")}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View className="py-2">
              <Text className="text-start">To</Text>
            </View>

            <TouchableOpacity
              //   onPress={() => setModalVisible(true)}
              className=" border-2 border-gray-200 p-2 rounded-lg flex-row"
            >
              <AntDesign name="calendar" size={16} color="gray" />
              <Text className="pl-2 text-gray-600">
                {moment(EndDate).format("Do MMM, YYYY")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="pt-5 flex-row justify-between">
          <Button text="Generate Report"></Button>
          <Button text="Download Report"></Button>
        </View>
      </View>
    </View>
  );
}
