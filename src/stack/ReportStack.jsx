import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReportPage from "../screens/Report/ReportPage";
import GenerateReport from "../screens/Report/GenerateReport";

const ReportStack = createNativeStackNavigator();

export default function ReportStackScreen() {
  return (
    <ReportStack.Navigator screenOptions={{ headerShown: false }}>
      <ReportStack.Screen name="ReportPage" component={ReportPage} />
      <ReportStack.Screen name="GenerateReport" component={GenerateReport} />
    </ReportStack.Navigator>
  );
}
