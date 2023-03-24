import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";

// import SitePage from "../screens/SitePage";
import SiteStack from "./SiteStack";
import TaskPage from "../screens/TaskPage";
// import WorkersPage from "../screens/WorkersPage";
import WorkerStackScreen from "./WorkerStack";
import ReportStackScreen from "./ReportStack";

//icons
import attendance from "../../assets/attendance.png";
import home from "../../assets/home.png";
import site from "../../assets/map1.png";
import reports from "../../assets/reports.png";
import tasks from "../../assets/tasks.png";
import HomeStackScreen from "./HomeStack";

const IconMap = {
  Teams: attendance,
  Home: home,
  Sites: site,
  Tasks: tasks,
  Report: reports,
};

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView className="bg-white border-t border-t-slate-300">
      <View className="w-full flex  flex-row justify-between px-5 bg-white pt-5 pb-2">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              className={
                "flex items-center p-3 rounded-lg " +
                (isFocused ? "bg-slate-200" : "")
              }
            >
              <Image
                source={IconMap[label]}
                className="h-5 w-5 mb-2"
                resizeMode="contain"
              />
              <Text className="text-xs">{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Tasks" component={TaskPage} />
      <Tab.Screen name="Report" component={ReportStackScreen} />
      <Tab.Screen name="Teams" component={WorkerStackScreen} />
      <Tab.Screen name="Sites" component={SiteStack} />
    </Tab.Navigator>
  );
}
