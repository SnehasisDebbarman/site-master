import React, { useCallback, useEffect, useState } from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import { LoginStackScreen } from "./src/stack/LoginStack";
import MainStack from "./src/stack/MainStack";
import ProfileStackScreen from "./src/stack/ProfileStack";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync(Entypo.font);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  const AppStack = createNativeStackNavigator();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen
            name="LoginStackScreen"
            component={LoginStackScreen}
          />
          <AppStack.Screen name="MainStack" component={MainStack} />
          <AppStack.Screen name="ProfileStack" component={ProfileStackScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaView>
  );
}
