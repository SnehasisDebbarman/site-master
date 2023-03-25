import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Header from "../../Components/Header";
import { VictoryPie } from "victory-native";
import InfoCard from "../../Components/InfoCard";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryArea,
} from "victory-native";
import FloatingActionBtn from "../../Components/FloatingActionBtn";

export default function ReportPage({ navigation }) {
  const [openFilter, setopenFilter] = useState(false);
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Reports" navigation={navigation} navigationActive={true} />
      <ScrollView className="p-5">
        <View className="flex flex-row-reverse justify-between">
          <TouchableOpacity
            onPress={() => setopenFilter(!openFilter)}
            className="relative flex flex-row py-1 px-2 border-gray-300 border-[1px] rounded"
          >
            <Ionicons name="ios-filter" size={16} color="gray" />
            <Text className="ml-2 text-gray-600">Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row py-1 px-2 border-amber-400 border-[1px] rounded bg-amber-200">
            <Ionicons name="ios-close" size={16} color="gray" />
            <Text className="ml-2 text-gray-600">This Week</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row justify-between items-center py-2">
          <Text className="text-lg font-bold">Reports</Text>
          <Text>Details</Text>
        </View>
        <View className="w-full flex flex-row">
          <InfoCard title={"Total Workers"} content={2012} />
          <InfoCard title={"Total Tasks"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Total machinery"} content={1214} />
        </View>
        <View className="w-full flex flex-row">
          <InfoCard title={"Budgeted Hours"} content={2012} />
          <InfoCard
            title={"Actual Hours"}
            content={1212}
            styles="bg-gray-200"
          />
          <InfoCard title={"Remaining Hours"} content={1214} />
        </View>
        <View className="w-full flex flex-row justify-between items-center py-2">
          <Text className="text-lg font-bold">Site Trends</Text>
          <Text>Details</Text>
        </View>
        <View>
          <VictoryChart
            width={360}
            minDomain={{ y: 0 }}

            // theme={VictoryTheme.material}
          >
            <VictoryAxis
              style={{
                axis: {
                  stroke: "rgba(0,0,0,0.2)",
                  strokeWidth: 2,
                },
                tickLabels: {
                  angle: 0,
                  fontSize: 12,
                  fill: "gray",
                },
                grid: {
                  stroke: "rgba(0,0,0,0.05)",
                  strokeWidth: 2,
                },
              }}
              crossAxis
              standalone={false}
            />
            <VictoryAxis
              dependentAxis
              crossAxis
              standalone={false}
              label={"Hours"}
              style={{
                axis: {
                  stroke: "rgba(0,0,0,0.2)",
                  strokeWidth: 2,
                },
                tickLabels: {
                  angle: 0,
                  fontSize: 12,
                  fill: "gray",
                },
                grid: {
                  stroke: "rgba(0,0,0,0.05)",
                  strokeWidth: 2,
                },
              }}
            />

            <VictoryArea
              interpolation="natural"
              style={{
                data: {
                  stroke: "#FFD369",
                  strokeWidth: 6,
                  strokeLinecap: "round",
                  fill: "rgba(255, 240, 233,0.5)",
                },
              }}
              data={[
                { x: "Jan", y: 5 },
                { x: "Feb", y: 9 },
                { x: "Mar", y: 7 },
                { x: "Apr", y: 8 },
                { x: "Jun", y: 4 },
              ]}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
            />
            <VictoryLine
              interpolation="natural"
              style={{
                data: {
                  stroke: "#A4ACF3",
                  strokeWidth: 6,
                  strokeLinecap: "round",
                },
                grid: {
                  stroke: "rgba(0,0,0,0.05)",
                  strokeWidth: 2,
                },
                // parent: { border: "1px solid #ccc" },
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 10 },
              ]}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
            />
          </VictoryChart>
        </View>
        <VictoryPie
          colorScale={["#A4ACF3", "#FFBD1D", "gold", "cyan", "navy"]}
          cornerRadius={5}
          width={320}
          data={[
            { x: "Pending Task", y: 25 },
            { x: "Completed Tasks", y: 120 },
          ]}
          innerRadius={60}
          padAngle={1}
        />
        <View className="w-full flex flex-row justify-between items-center py-2">
          <Text className="text-lg font-bold">Remaining Materials</Text>
          <Text>Details</Text>
        </View>
        <View className="w-full flex flex-row">
          <InfoCard title={"Cement"} content={"1000 kg"} />
          <InfoCard
            title={"Stone Chips"}
            content={"200 kg"}
            styles="bg-gray-200"
          />
          <InfoCard title={"Bricks"} content={"1 Lac"} />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openFilter}
        onRequestClose={() => {
          setopenFilter(false);
        }}
      >
        <TouchableOpacity
          onPressOut={() => {
            setopenFilter(false);
          }}
          className="flex-1 "
        >
          <View className="p-2 rounded-md bg-white border border-gray-200 absolute right-5 top-40 w-52">
            <View className="flex-row justify-center rounded-md bg-amber-200 px-2 py-2">
              <Ionicons name="ios-filter" size={16} color="gray" />
              <Text className="pl-2">Configure this View</Text>
            </View>
            <View className="flex-row  px-2 py-2 justify-between">
              <Text className="font-semibold">Displayed Field</Text>
              <Text className="pl-2"> reset</Text>
            </View>
            <View className="flex-row  px-2 py-2">
              <Checkbox
                // color="Yellow"
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text className="pl-2"> Today</Text>
            </View>
            <View className="flex-row  px-2 py-2">
              <Checkbox value={isChecked} onValueChange={setChecked} />
              <Text className="pl-2"> This Month</Text>
            </View>
            <View className="flex-row  px-2 py-2">
              <Checkbox value={isChecked} onValueChange={setChecked} />
              <Text className="pl-2"> Till Today </Text>
            </View>
            <View className="flex-row  px-2 py-2">
              <Checkbox
                color="Yellow"
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text className="pl-2"> Date Range</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <FloatingActionBtn
        onPress={() => navigation.navigate("GenerateReport")}
        text="Generate Report"
      />
    </SafeAreaView>
  );
}
