import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../Components/Header";
import { VictoryPie } from "victory-native";
import InfoCard from "../../Components/InfoCard";
import { DataTable } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Headings from "../../Components/Headings";
import { Chip } from "react-native-paper";

export default function WorkersPage({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Workers" navigation={navigation} navigationActive={true} />
      <ScrollView className="p-5 flex-grow">
        <Headings>
          <Text>Quick Actions</Text>
        </Headings>
        <View className="flex flex-wrap flex-row gap-2">
          <Chip
            onPress={() => {
              navigation.navigate("AddLabour");
            }}
            icon="plus"
            className="bg-amber-200 "
          >
            <Text className="text-[10px]">Add Labour</Text>
          </Chip>
          <Chip icon="plus" className="bg-amber-200">
            <Text className="text-[10px]">Add Labour Attendance</Text>
          </Chip>

          <Chip
            onPress={() => {
              navigation.navigate("AddContractor");
            }}
            icon="plus"
            className="bg-amber-200"
          >
            <Text className="text-[10px]">Add Contractor</Text>
          </Chip>

          <Chip icon="plus" className="bg-amber-200">
            <Text className="text-[10px]"> Add Contractor Attendance</Text>
          </Chip>
        </View>
        <View className="w-full flex flex-row justify-between items-center py-2">
          <Text className="text-lg font-bold">Attendance</Text>
          <Text>Details</Text>
        </View>
        <View className="w-full flex flex-row">
          <InfoCard title={"Total People"} content={2012} />
          <InfoCard title={"Present"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Absent"} content={1214} />
        </View>
        {/* charts */}
        <View className="mx-5">
          <VictoryPie
            colorScale={["#A4ACF3", "#FFBD1D", "gold", "cyan", "navy"]}
            cornerRadius={5}
            width={320}
            data={[
              { x: "Absent", y: 25 },
              { x: "Present", y: 120 },
            ]}
            innerRadius={60}
            padAngle={1}
          />
        </View>
        {/* Labour */}

        <View className="w-full flex flex-row justify-between items-center">
          <View className="py-4 flex-row">
            <Text className="text-lg font-bold ">Labours</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddLabour");
              }}
              className=" ml-2 flex-row items-center px-2 py-1 bg-amber-200 rounded"
            >
              <AntDesign name="plus" size={10} color="black" />
              <Text className="ml-1 text-[8px]">Add Labour</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Labours");
            }}
          >
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row">
          <InfoCard title={"Total People"} content={2012} />
          <InfoCard title={"Present"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Absent"} content={1214} />
        </View>
        {/* vendor */}
        <View className="w-full flex flex-row justify-between items-center">
          <View className="py-4 flex-row">
            <Text className="text-lg font-bold ">Contractors</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AddContractor");
              }}
              className=" ml-2 flex-row items-center px-2 py-1 bg-amber-200 rounded"
            >
              <AntDesign name="plus" size={10} color="black" />
              <Text className="ml-1 text-[8px]">Add Contractor</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("VendorPage");
            }}
          >
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row">
          <InfoCard title={"Total Contractors"} content={2012} />
          <InfoCard title={"Active"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Inactive"} content={1214} />
        </View>
        <View className="h-64 w-full"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
