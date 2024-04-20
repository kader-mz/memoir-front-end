import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screen/Home/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "../screen/Home/DashboardScreen";
import CalendarScreen from "../screen/Home/CalendarScreen";
import TemplateScreen from "../screen/Home/TemplateScreen";
import WorkScreen from "../screen/Home/WorkScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();
const Tabs = ({ setIsLogin }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "dashboard") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "calendar") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "work") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "template") {
              iconName = focused ? "document-text" : "document-text-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="settings"
          component={SettingsScreen}
          options={({ navigation }) => ({
            title: "setting",
            headerRight: () => (
              <TouchableOpacity onPress={() => setIsLogin(false)}>
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen name="dashboard" component={DashboardScreen} />
        <Tab.Screen name="work" component={WorkScreen} />
        <Tab.Screen name="calendar" component={CalendarScreen} />
        <Tab.Screen name="template" component={TemplateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logout: {},
  logoutText: {
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
});

export default Tabs;
