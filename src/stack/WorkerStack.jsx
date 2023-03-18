import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkersPage from "../screens/Worker/WorkersPage";
import LabourInfo from "../screens/Worker/LabourInfo";
import LabourPage from "../screens/Worker/LabourPage";

const WorkerStack = createNativeStackNavigator();

export default function WorkerStackScreen() {
  return (
    <WorkerStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkerStack.Screen name="Workers" component={WorkersPage} />
      <WorkerStack.Screen name="Labours" component={LabourPage} />
      <WorkerStack.Screen name="LabourDetails" component={LabourInfo} />
    </WorkerStack.Navigator>
  );
}
