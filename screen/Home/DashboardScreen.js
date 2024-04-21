import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Workers from "../../component/Workers";

const DashboardScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Workers />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
export default DashboardScreen;
