import React, { useEffect, useState } from "react";
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Agenda } from "react-native-calendars";
import AddDate from "../../component/AddDate";

function CalendarScreen() {
  const [items, setItems] = useState(null); // Initialize items state as null

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadItemsFromFile();
  }, []);

  const loadItemsFromFile = async () => {
    try {
      const filePath = FileSystem.documentDirectory + "calendarData.json";
      const fileContent = await FileSystem.readAsStringAsync(filePath);
      const jsonData = JSON.parse(fileContent);
      // Update the items state with the loaded data
      setItems(jsonData);
      console.log("JSON file has been loaded successfully");
    } catch (error) {
      console.error("Error reading JSON file:", error);
      Alert.alert("Error", "Failed to read JSON file");
    }
  };

  const addEvent = (newEvent) => {
    setItems((prevItems) => ({
      ...prevItems,
      [newEvent.date]: [...(prevItems[newEvent.date] || []), newEvent],
    }));
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={showModal}>
        <AddDate
          items={items}
          addEvent={addEvent}
          setShowModal={setShowModal}
        />
      </Modal>
      <Agenda
        items={items}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.data}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.eventBtn}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.eventBtnText}>Add</Text>
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
  dateContainer: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default CalendarScreen;
