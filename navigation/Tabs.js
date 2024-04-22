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
import { useGlobalContext } from "../contextapi/useGlobalContext";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  const {
    setIsLogin,
    setShowWorkersList,
    showWorkersList,
    showNotesList,
    setShowNotesList,
  } = useGlobalContext();
  const handlePress = () => {
    if (showWorkersList || showNotesList) {
      setShowWorkersList(false);
      setShowNotesList(false);
    }
  };
  console.log(showNotesList, showWorkersList);
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
          name="dashboard"
          component={DashboardScreen}
          options={({ navigation }) => ({
            title: "dashboard",
            headerRight: () => {
              return (
                showWorkersList && (
                  <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => handlePress()}
                  >
                    <Text style={styles.backBtnText}>Back</Text>
                  </TouchableOpacity>
                )
              );
            },
          })}
        />
        <Tab.Screen name="work" component={WorkScreen} />
        <Tab.Screen name="calendar" component={CalendarScreen} />
        <Tab.Screen name="template" component={TemplateScreen} />
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
  backBtn: {
    backgroundColor: "#3d85c6",
    padding: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    right: 0,
  },
  backBtnText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Tabs;
