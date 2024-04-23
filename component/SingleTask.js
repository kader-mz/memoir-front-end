import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SingleTask = ({ id, name, description, setNoteList, noteList }) => {
  const handleDelete = (id) => {
    const newList = noteList.filter((item) => item.id !== id);
    setNoteList([...newList]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.workerEdit}>
        <TouchableOpacity>
          <Image source={require("../assets/mod.png")} style={styles.editBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(id)}>
          <Image
            source={require("../assets/delete.png")}
            style={styles.editBtn}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 150,
    backgroundColor: "#4F6F52",
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  workerEdit: {
    position: "absolute",
    zIndex: 20,
    right: 10,
    top: 10,
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
  },
  editBtn: {
    width: 25,
    height: 25,
  },
  description: {
    color: "white",
    fontSize: 16,
  },
});
export default SingleTask;
