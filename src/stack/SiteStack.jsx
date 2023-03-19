import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SitePage from "../screens/Site/SitePage";
import AddSite from "../screens/Site/AddSite";
import MaterialsPage from "../screens/MaterialsPage";

const SiteStack = createNativeStackNavigator();

export default function SiteStackScreen() {
  return (
    <SiteStack.Navigator screenOptions={{ headerShown: false }}>
      <SiteStack.Screen name="SiteHome" component={SitePage} />
      <SiteStack.Screen name="AddSite" component={AddSite} />
      <SiteStack.Screen name="Materials" component={MaterialsPage} />
    </SiteStack.Navigator>
  );
}
