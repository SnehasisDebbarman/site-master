import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import { Ionicons } from "@expo/vector-icons";
import Headings from "../../Components/Headings";
import { DataTable } from "react-native-paper";
import FloatingActionBtn from "../../Components/FloatingActionBtn";

export default function VendorInfo({ navigation }) {
  return (
    <SafeAreaView className=" flex-1 bg-white">
      <Header
        title="Vendor Info "
        navigation={navigation}
        navigationActive={true}
      />
      <View className="p-5">
        <View className="flex flex-row ">
          <Ionicons name="person-circle-outline" size={60} color="black" />
          <View className="pl-4 flex justify-center">
            <Text className="text-2xl text-bold">Pratik Thakur</Text>
            <View className="flex flex-row gap-2 items-center">
              <Text>ACC</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row gap-1 mt-4 justify-center border rounded-xl border-gray-300 py-3">
          <View className="p-1 w-1/3 border-r border-r-gray-200 ">
            <Text className="text-[10px]  text-center">Total Payment</Text>
            <Text className="text-3xl text-center font-bold text-yellow-600">
              13
            </Text>
          </View>
          <View className="p-1 w-1/3 border-r border-r-gray-200">
            <Text className="text-[10px]  text-center"> Pending Payment</Text>
            <Text className="text-3xl text-center font-bold text-yellow-600">
              13
            </Text>
          </View>
          <View className="p-1 w-1/3 border-r border-r-gray-200">
            <Text className="text-[10px] text-center">Payment Till Today</Text>
            <Text className="text-3xl text-center font-bold text-yellow-600">
              13
            </Text>
          </View>
        </View>
        <Headings>Supplied Material</Headings>
        <Text className="text-gray-500">Cement, Stone Chips</Text>
        <Headings>Total Supplied Materials</Headings>
        <DataTable className="px-5 ">
          <DataTable.Header className="border-2 border-gray-200 rounded-t-xl">
            <DataTable.Title className="border-r-2 border-gray-200 ">
              <Text className="font-extrabold">Dessert</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text className="font-extrabold">Calories</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row className="border-x-2 border-gray-200">
            <DataTable.Cell className="border-r-2 border-gray-200">
              Frozen yogurt
            </DataTable.Cell>
            <DataTable.Cell numeric>159</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row className="border-2 border-gray-200 rounded-b-xl">
            <DataTable.Cell className="border-r-2 border-gray-200">
              Ice cream sandwich
            </DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <Headings>Contact No</Headings>
        <Text className="text-gray-500">+91 92827 12829</Text>
        <Headings>Transaction</Headings>
      </View>
      <FloatingActionBtn text="edit" />
    </SafeAreaView>
  );
}
