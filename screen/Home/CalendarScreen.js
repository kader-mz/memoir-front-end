import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";

function CalendarScreen() {
  const [items, setItems] = useState({
    "2024-04-20": [
      {
        name: "random event",
        data: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
      },
    ],
  });
  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        items={items}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.data}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.eventBtn}>
        <Text style={styles.eventBtnText}>BACK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  item: {
    backgroundColor: "lightblue",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 25,
    paddingBottom: 20,
  },
  itemText: {
    color: "black",
    fontSize: 16,
  },
  eventBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    bottom: 30,
    right: 20,
    position: "absolute",
  },
  eventBtnText: {
    padding: 20,
    backgroundColor: "#5BBCFF",
    borderRadius: 100,
    fontWeight: "bold",
    color: "white",
  },
});

export default CalendarScreen;
