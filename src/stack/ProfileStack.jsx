import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PersonalInfoPage from "../screens/Profile/PersonalInfoPage";
import SideNav from "../screens/Profile/SideNav";
import SettingsPage from "../screens/Profile/SettingsPage";

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={SideNav} />
      <ProfileStack.Screen name="Personal Info" component={PersonalInfoPage} />
      <ProfileStack.Screen name="Settings" component={SettingsPage} />
    </ProfileStack.Navigator>
  );
}
