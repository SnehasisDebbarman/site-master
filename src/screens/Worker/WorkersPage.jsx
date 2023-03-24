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

export default function WorkersPage({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Workers" navigation={navigation} navigationActive={true} />
      <ScrollView className="p-5 flex-grow">
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Attendance</Text>
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
          <Text className="text-xl font-bold py-2">Labours</Text>
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
          <Text className="text-xl font-bold py-2">Vendors</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("VendorPage");
            }}
          >
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row">
          <InfoCard title={"Total Vendors"} content={2012} />
          <InfoCard title={"Active"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Inactive"} content={1214} />
        </View>
        <View className="h-64 w-full"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
