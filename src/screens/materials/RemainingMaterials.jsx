import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import FloatingActionBtn from "../../Components/FloatingActionBtn";

export default function RemainingMaterials({ navigation }) {
  return (
    <View className="bg-white flex-1">
      <Header title="Remaining Materials" navigation={navigation} />
      <View className="p-5">
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
      </View>
      <FloatingActionBtn
        text="Add Material"
        onPress={() => navigation.navigate("AddMaterial")}
      />
    </View>
  );
}
