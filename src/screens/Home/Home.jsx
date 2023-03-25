import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import placeholder from "../../../assets/placeholder.png";
import { Feather } from "@expo/vector-icons";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryArea,
} from "victory-native";
import InfoCard from "../../Components/InfoCard";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Home" navigation={navigation} navigationActive={true} />
      <ScrollView className="w-full h-full p-5 pb-10">
        <View className="pb-4 w-full flex flex-row justify-between items-center">
          <Text className="text-lg font-bold">Site Overview</Text>
          <Text>Details</Text>
        </View>

        <View className="w-full flex flex-row">
          <InfoCard title={"Site Overview"} content={2012} />
          <InfoCard title={"Total Task"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Total Site"} content={1214} />
        </View>

        <View className="w-full flex flex-row">
          <InfoCard
            title={"Site Overview"}
            content={2012}
            styles="bg-gray-200"
          />
          <InfoCard title={"Total Task"} content={1212} />
          <InfoCard title={"Total Site"} content={1214} styles="bg-gray-200" />
        </View>

        <View className="pt-4 w-full flex flex-row justify-between items-center">
          <Text className="text-lg font-bold">Sites Trends</Text>
          <Text>Details</Text>
        </View>
        <View className="justify-center">
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
