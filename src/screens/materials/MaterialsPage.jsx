import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../../Components/Header";
import InfoCard from "../../Components/InfoCard";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FloatingActionBtn from "../../Components/FloatingActionBtn";

const MaterialHome = ({ navigation }) => {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header
        title="Materials"
        navigation={navigation}
        navigationActive={true}
      />
      <ScrollView className="w-full h-full p-5 pb-10">
        <View className="pb-4 w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Site Overview</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RemainingMaterials")}
          >
            <Text>Details</Text>
          </TouchableOpacity>
        </View>

        <View className="w-full flex flex-row">
          <InfoCard title={"Site Overview"} content={2012} />
          <InfoCard title={"Total Task"} content={1212} styles="bg-gray-200" />
          <InfoCard title={"Total Site"} content={1214} />
        </View>

        <View className="pt-4 w-full flex flex-row justify-between items-center">
          <Text className="text-xl font-bold">Material Received</Text>
          <Text>Details</Text>
        </View>
        <View className="flex flex-row py-5 gap-2 justify-between">
          <TouchableOpacity
            // onPress={() => setModalVisible(true)}
            className="border-2 border-gray-200 w-2/5 p-2 rounded-lg flex-row"
          >
            <AntDesign name="calendar" size={16} color="gray" />
            <Text className="pl-2 text-gray-600">
              {moment(StartDate).format("Do MMM, YYYY")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => setModalVisible(true)}
            className="border-2 border-gray-200 w-2/5 p-2 rounded-lg flex-row"
          >
            <AntDesign name="calendar" size={16} color="gray" />
            <Text className="pl-2 text-gray-600">
              {moment(EndDate).format("Do MMM, YYYY")}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {[1, 2, 4, 5, 6].map((it) => {
            return (
              <TouchableOpacity
                key={it}
                // onPress={() => {
                //   navigation.navigate("LabourDetails");
                // }}
                className="flex mb-2 p-2  border-gray-200 rounded-lg border "
              >
                <View>
                  <View className=" flex justify-center">
                    <View className="flex-row justify-between items-center pb-2">
                      <Text className=" w-[30%] text-xl text-bold text-gray-800">
                        Cement
                      </Text>

                      <View className="flex-grow  flex-row justify-start items-center px-2 py-1 ">
                        <Ionicons
                          name="md-speedometer-outline"
                          size={12}
                          color="black"
                        />
                        <Text className="ml-2 text-[10px]">200 kg</Text>
                      </View>

                      <View className="flex-row items-center px-2 bg-amber-300 py-1 rounded">
                        <MaterialCommunityIcons
                          name="clipboard-edit-outline"
                          size={12}
                          color="black"
                        />
                        <Text className="ml-2 text-[10px]">edit</Text>
                      </View>
                    </View>

                    <View className="flex-row  items-center justify-between">
                      <View className="   flex-row w-[30%]">
                        <AntDesign name="idcard" size={12} color="gray" />
                        <Text className="ml-2 text-[10px] text-bold text-gray-800">
                          Cement
                        </Text>
                      </View>

                      <View className="flex-grow flex-row justify-start items-center px-2 py-1 ">
                        <Ionicons
                          name="md-speedometer-outline"
                          size={12}
                          color="black"
                        />
                        <Text className="ml-2 text-[10px]">200 kg</Text>
                      </View>

                      <View className="flex-row items-center px-2 bg-red-300 py-1 rounded">
                        <Text className="ml-2 text-[10px]">Pending</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <FloatingActionBtn
        onPress={() => navigation.navigate("AddMaterialInfo")}
        Icon={<Ionicons name="add" size={20} color="black" />}
        text="Add Material Info"
      />
    </SafeAreaView>
  );
};

export default MaterialHome;
