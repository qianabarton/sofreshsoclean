/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import NotFoundScreen from "../screens/NotFoundScreen";

import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen, RegistrationScreen } from "../screens";
import BottomTabNavigator from "./BottomTabNavigator";
import RequestScreen from "../screens/RequestWash/RequestScreen";
import RequestConfirmScreen from "../screens/RequestWash/RequestConfirmScreen";

import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function Navigation() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen
          name="RequestScreen"
          component={RequestScreen}
          options={{
            headerBackTitle: " ",
            headerShown: true,
            title: "",
          }}
        />
        <Stack.Screen
          name="RequestConfirmScreen"
          component={RequestConfirmScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all
// other content Read more here: https://reactnavigation.org/docs/modal
// <Stack.Screen name="Root" component={BottomTabNavigator} /> <Stack.Screen
// name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
