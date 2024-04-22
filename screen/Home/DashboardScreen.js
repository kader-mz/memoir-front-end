import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Card from "../../component/Card";
import Workers from "../../component/Workers";
import workerImage from "../../assets/worker.jpg";
import notesImage from "../../assets/notes.png";
import { useGlobalContext } from "../../contextapi/useGlobalContext";
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
        <>
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
          />
        </>
      )}
      {showWorkersList && (
        <View style={styles.container}>
          <Workers />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  safeAreaStyle: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
});
export default DashboardScreen;
