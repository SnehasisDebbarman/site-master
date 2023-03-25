import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkersPage from "../screens/Worker/WorkersPage";
import LabourInfo from "../screens/Worker/LabourInfo";
import LabourPage from "../screens/Worker/LabourPage";
import AddLabour from "../screens/Worker/AddLabour";
import VendorPage from "../screens/Worker/VendorPage";
import VendorInfo from "../screens/Worker/VendorInfo";
import AddContractor from "../screens/Worker/AddContractor";

const WorkerStack = createNativeStackNavigator();

export default function WorkerStackScreen() {
  return (
    <WorkerStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkerStack.Screen name="Workers" component={WorkersPage} />
      <WorkerStack.Screen name="Labours" component={LabourPage} />
      <WorkerStack.Screen name="LabourDetails" component={LabourInfo} />
      <WorkerStack.Screen name="AddLabour" component={AddLabour} />
      <WorkerStack.Screen name="VendorPage" component={VendorPage} />
      <WorkerStack.Screen name="VendorInfo" component={VendorInfo} />
      <WorkerStack.Screen name="AddContractor" component={AddContractor} />
    </WorkerStack.Navigator>
  );
}
