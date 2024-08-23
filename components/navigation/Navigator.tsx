import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppOnboarding from "@/app/routes/auth/AppOnboarding";
import Events from "@/app/routes/events/";
import SignUp from "@/app/routes/auth/SignUp";
import Auth from "@/app/routes/auth";
import Login from "@/app/routes/auth/Login";

export default function Navigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          options={{ headerShown: false }}
          component={Auth}
        />
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name="AppOnboarding"
          options={{ headerShown: false }}
          component={AppOnboarding}
        />
        <Stack.Screen
          name="Events"
          options={{ headerShown: false }}
          component={Events}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
