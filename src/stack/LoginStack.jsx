import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

import LoginLanding from "../screens/Landing";
import OtpScreen from "../screens/OtpScreen";
import AuthenticationHome from "../screens/AuthenticationHome";

const HomeStack = createNativeStackNavigator();

export function LoginStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="LoginLanding" component={LoginLanding} />
      <HomeStack.Screen name="GetStarted" component={GetStarted} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="SignUp" component={SignUp} />
      <HomeStack.Screen name="OtpScreen" component={OtpScreen} />
      <HomeStack.Screen
        name="AuthenticationHome"
        component={AuthenticationHome}
      />
    </HomeStack.Navigator>
  );
}
