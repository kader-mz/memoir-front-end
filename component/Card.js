import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Card = ({
  workerImage,
  title,
  description,
  btnText,
  setShowWorkersList,
  setShowNotesList,
}) => {
  const handlePress = (title) => {
    if (title === "Worker") {
      setShowWorkersList(true);
      return;
    }
    if (title === "Tasks and notes") {
      setShowNotesList(true);
      return;
    }
  };
  return (
    <View style={styles.card}>
      <Image source={workerImage} style={styles.image} resizeMode="cover" />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text>{description}</Text>
        <View style={styles.cardActions}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(title)}
          >
            <Text style={styles.buttonText}>{btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#333",
    borderRadius: 8,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Card;
