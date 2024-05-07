import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";

const AddDate = ({ setShowModal, addEvent }) => {
  const [day, setDay] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!day || !name || !description) {
      alert("Please fill in all fields");
      return;
    }
    const newEvent = {
      date: day,
      name: name,
      data: description,
    };
    addEvent(newEvent);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: 20,
          }}
        >
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Image
              source={require("../assets/close.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.text}>Enter date</Text>
          <TextInput
            style={styles.input}
            value={day}
            onChangeText={(text) => setDay(text)}
            placeholder="YYYY-MM-DD"
          />
          <Text style={styles.text}>Enter name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Event Name"
          />
        </View>
        <View>
          <Text style={styles.text}>Enter description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder="Event Description"
          />
        </View>

        <TouchableOpacity onPress={handleSave}>
          <Text style={{ textAlign: "center", marginTop: 20, color: "blue" }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "white",
    justifyContent: "center",

    borderRadius: 10,
    padding: 10,
    height: 650,
    width: "100%",
  },
  image: {
    width: 35,
    height: 35,
  },
  input: {
    marginTop: 15,
    borderRadius: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    fontSize: 15,
    marginVertical: 10,
  },
});

export default AddDate;
