import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import profilePlaceHolder from "../../../assets/sidebarIcon/profilePlaceholder.png";
import rightArrow from "../../../assets/sidebarIcon/rightArrow.png";

import attendance_icon from "../../../assets/sidebarIcon/attendance_sidebar_icon.png";
import material_icon from "../../../assets/sidebarIcon/material_sidebar_icon.png";
import report_icon from "../../../assets/sidebarIcon/report_sidebar_icon.png";
import setting_icon from "../../../assets/sidebarIcon/setting_sidebar_icon.png";
import site_icon from "../../../assets/sidebarIcon/site_sidebar_icon.png";
import task_icon from "../../../assets/sidebarIcon/task_sidebar_icon.png";

import logout_icon from "../../../assets/sidebarIcon/logout.png";
import { Ionicons } from "@expo/vector-icons";

export default function SideNav({ navigation }) {
  return (
    <View className="bg-white flex-1 p-5 justify-between ">
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="flex-row items-center justify-end"
        >
          <View className="bg-site-500 flex-row  p-3  items-center rounded-lg">
            <Ionicons name="chevron-back" size={12} color="black" />
          </View>
        </TouchableOpacity>
        <View className=" flex-row items-center justify-between">
          <View className="flex-row gap-3 items-center">
            <Image
              source={profilePlaceHolder}
              className="bg-pink-200 rounded-full"
            />
            <View>
              <Text className="text-xl font-semibold">
                Souvik Bhattachariya
              </Text>
              <Text className="text-gray-500">Admin</Text>
            </View>
          </View>

          <Image source={rightArrow} />
        </View>
        <View className="w-4/5 mt-16">
          <TouchableOpacity
            onPress={() => navigation.navigate("SiteHome")}
            className="flex-row gap-3 pb-5"
          >
            <Image resizeMode="contain" source={site_icon} />
            <Text className="font-medium">Sites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Tasks")}
            className="flex-row gap-3 pb-5"
          >
            <Image resizeMode="contain" source={task_icon} />
            <Text className="font-medium">Tasks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Report")}
            className="flex-row gap-3 pb-5"
          >
            <Image resizeMode="contain" source={report_icon} />
            <Text className="font-medium">Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Home", { screen: "Materials" })}
            className="flex-row gap-3 pb-5"
          >
            <Image resizeMode="contain" source={material_icon} />
            <Text className="font-medium">Materials</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Workers")}
            className="flex-row gap-3 pb-5"
          >
            <Image resizeMode="contain" source={attendance_icon} />
            <Text className="font-medium">Attendance</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            className="flex-row gap-3 pb-5"
          >
            <Image resizeMode="contain" source={setting_icon} />
            <Text className="font-medium">Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("LoginStackScreen", {
            screen: "AuthenticationHome",
          })
        }
        className="flex-row gap-4 font-bold items-center"
      >
        <Image source={logout_icon} />
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
