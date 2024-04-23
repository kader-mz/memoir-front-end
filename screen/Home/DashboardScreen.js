import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Card from "../../component/Card";
import Workers from "../../component/Workers";
import workerImage from "../../assets/worker.jpg";
import notesImage from "../../assets/notes.png";
import { useGlobalContext } from "../../contextapi/useGlobalContext";
import AddTask from "../../component/AddTask";

const DashboardScreen = () => {
  const {
    setShowNotesList,
    setShowWorkersList,
    showNotesList,
    showWorkersList,
  } = useGlobalContext();

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      {!showNotesList && !showWorkersList && (
        <View style={styles.container}>
          <Card
            workerImage={workerImage}
            title="Worker"
            description=""
            btnText="See worker workers"
            setShowWorkersList={setShowWorkersList}
            setShowNotesList={setShowNotesList}
          />

          <Card
            workerImage={notesImage}
            title="Tasks and notes"
            description=""
            btnText="See tasks and notes"
            setShowWorkersList={setShowWorkersList}
            setShowNotesList={setShowNotesList}
          />
        </View>
      )}
      {showWorkersList && (
        <View style={styles.workerContainer}>
          <Workers />
        </View>
      )}
      {showNotesList && <AddTask />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  workerContainer: {
    flex: 1,
    width: "100%",
    gap: 10,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  safeAreaStyle: {
    gap: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
});

export default DashboardScreen;
