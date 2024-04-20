import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const AddNewEvent = ({ items, setItems }) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const handleSubmit = () => {
    const newData = {
      [date]: [
        {
          name: name,
          data: data,
        },
      ],
    };
    console.log(newData);
    // setItems({ ...items, newData });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        onChange={(e) => setDate(e.nativeEvent.text)}
        value={"2024-04-20"}
      />
      <TextInput
        placeholder="Name"
        value="farouk"
        onChange={(e) => setName(e.nativeEvent.text)}
        style={styles.input}
      />
      <View style={styles.dataContainer}>
        <TextInput
          placeholder="What do you think ?"
          value="idk"
          onChange={(e) => setData(e.nativeEvent.text)}
        />
      </View>
      <TouchableOpacity title="Submit" onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: 10,
  },
  input: {
    borderColor: "#F6F5F5",
    borderRadius: 10,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dataContainer: {
    flex: 1,
    width: "95%",
    marginLeft: 10,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "#F6F5F5",
    marginBottom: 15,
  },
});

export default AddNewEvent;
