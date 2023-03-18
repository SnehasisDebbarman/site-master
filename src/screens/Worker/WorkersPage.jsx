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

export default function WorkersPage({ navigation }) {
  return (
    <SafeAreaView>
      <Header title="Workers" navigation={navigation} navigationActive={true} />
      <ScrollView className="p-5 flex-grow">
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Attendance</Text>
          <Text>Details</Text>
        </View>
        <View className="w-full flex flex-row justify-between py-5">
          <View className="mr-4 w-1/4 h-28 flex-grow  bg-yellow-400 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">
              Total Attendance
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className="mr-4 w-1/4 h-28 flex-grow  bg-gray-200 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">Vendor</Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className=" w-1/4 h-28 flex-grow  bg-yellow-400 rounded-xl flex justify-center">
            <Text className="px-1 text-xs  text-center font-medium">
              Labour
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
        </View>
        {/* charts */}
        <VictoryPie
          innerRadius={75}
          width={350}
          colorScale={["#FFD369", "#c0c0c0"]}
          data={[
            { x: "Vendors", y: 55 },
            { x: "Workers", y: 135 },
          ]}
        />
        {/* Labour */}
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Labours</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Labours");
            }}
          >
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row justify-between py-5">
          <View className="mr-4 w-1/4 h-28 flex-grow   bg-gray-200 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">
              Total Labours
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className="mr-4 w-1/4 h-28 flex-grow  bg-yellow-400 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">
              Present
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className=" w-1/4 h-28 flex-grow   bg-gray-200 rounded-xl flex justify-center">
            <Text className="px-1 text-xs  text-center font-medium">
              Labour
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
        </View>
        {/* vendor */}
        <View className="w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Vendors</Text>
          <Text>Details</Text>
        </View>
        <View className="w-full flex flex-row justify-between py-5">
          <View className="mr-4 w-1/4 h-28 flex-grow  bg-yellow-400 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">
              Total Vendors
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className="mr-4 w-1/4 h-28 flex-grow  bg-gray-200 rounded-xl flex justify-center">
            <Text className="px-1 text-xs text-center font-medium">
              Present
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
          <View className=" w-1/4 h-28 flex-grow  bg-yellow-400 rounded-xl flex justify-center">
            <Text className="px-1 text-xs  text-center font-medium">
              Absent
            </Text>
            <Text className="text-center text-4xl font-bold">121</Text>
          </View>
        </View>
        <View className="h-64 w-full"></View>
      </ScrollView>
    </SafeAreaView>
  );
}