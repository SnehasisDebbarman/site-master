import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialHome from "../screens/materials/MaterialsPage";
import AddMaterial from "../screens/materials/AddMaterial";
import AddMaterialInfo from "../screens/materials/AddMaterialInfo";
import RemainingMaterials from "../screens/materials/RemainingMaterials";
const MaterialStack = createNativeStackNavigator();

export default function MaterialStackScreen() {
  return (
    <MaterialStack.Navigator screenOptions={{ headerShown: false }}>
      <MaterialStack.Screen name="MaterialHome" component={MaterialHome} />
      <MaterialStack.Screen name="AddMaterial" component={AddMaterial} />
      <MaterialStack.Screen
        name="AddMaterialInfo"
        component={AddMaterialInfo}
      />
      <MaterialStack.Screen
        name="RemainingMaterials"
        component={RemainingMaterials}
      />
    </MaterialStack.Navigator>
  );
}
