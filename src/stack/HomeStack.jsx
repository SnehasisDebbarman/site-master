import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import MaterialStackScreen from "./MaterialStack";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="Materials" component={MaterialStackScreen} />
    </HomeStack.Navigator>
  );
}
