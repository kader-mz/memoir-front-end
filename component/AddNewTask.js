import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import uuid from "react-native-uuid";
const AddNewTask = ({ setAddNewTask, noteList, setNoteList }) => {
  const [newNote, setNewNote] = useState({
    id: uuid.v4(),
    name: "",
    description: "",
  });

  const handleAddTask = () => {
    const newNoteList = [...noteList, newNote];
    setNewNote(newNoteList);
    setAddNewTask(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task name</Text>
      <TextInput
        placeholder="Please provide a task name"
        style={styles.inputText}
        value={newNote.name}
        onChange={(e) => setNewNote([{ ...newNote, name: e.nativeEvent.text }])}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="task description here..."
          style={styles.textArea}
          multiline={true}
          value={newNote.description}
          onChange={(e) =>
            setNewNote([{ ...newNote, description: e.nativeEvent.text }])
          }
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => setAddNewTask(false)}
        >
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submit} onPress={() => handleAddTask()}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  text: {
    fontSize: 20,
    color: "#222831",
  },
  inputText: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#31363F",
  },
  inputContainer: {
    minWidth: "100%",
    height: 300,
    borderWidth: 1,
    borderColor: "#31363F",
    borderRadius: 10,
  },
  textArea: {
    padding: 20,
    fontSize: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  back: {
    backgroundColor: "#FF9130",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  submit: {
    backgroundColor: "#213555",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
export default AddNewTask;
