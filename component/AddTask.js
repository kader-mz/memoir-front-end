import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import uuid from "react-native-uuid";
import SingleTask from "./SingleTask";
import AddNewTask from "./AddNewTask";

const AddTask = () => {
  const [addingNewTask, setAddNewTask] = useState(false);
  const [noteList, setNoteList] = useState([
    {
      id: uuid.v4(),
      name: "first note",
      description: "this is just a test note",
    },
    {
      id: uuid.v4(),
      name: "second note",
      description: "this is also for test second note",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.noteText}>
          {addingNewTask ? "Add new Task" : "Your notes"}
        </Text>
        <TouchableOpacity onPress={() => setAddNewTask(true)}>
          <Image
            source={require("../assets/editnote.png")}
            style={styles.editImage}
          />
        </TouchableOpacity>
      </View>

      {!addingNewTask && (
        <View style={styles.noteContainer}>
          {noteList?.map((item) => {
            return (
              <SingleTask
                noteList={noteList}
                setNoteList={setNoteList}
                key={item.id}
                {...item}
              />
            );
          })}
        </View>
      )}

      {addingNewTask && (
        <AddNewTask
          noteList={noteList}
          setNoteList={setNoteList}
          setAddNewTask={setAddNewTask}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  noteText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  editImage: {
    width: 30,
    height: 30,
  },
  noteContainer: {
    flex: 1,
    borderRadius: 10,
  },
});

export default AddTask;
