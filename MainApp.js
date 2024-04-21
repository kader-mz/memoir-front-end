import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screen/auth/LoginScreen";
import Signup from "./screen/auth/SignupScreen";
import WelcomScreen from "./screen/auth/WelcomScreen";
import Tabs from "./navigation/Tabs";
import { AppProvider, useGlobalContext } from "./contextapi/useGlobalContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
const Stack = createNativeStackNavigator();
const MainApp = () => {
  const { isLogin } = useGlobalContext();
  if (isLogin) {
    return <Tabs />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcom" component={WelcomScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
