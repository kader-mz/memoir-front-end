import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SendWorker from "./SendWorker";
import { useState } from "react";

const Workers = () => {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      email: "kader@gmail.com",
      role: "nazra3",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.workersText}>Workers</Text>
        <TouchableOpacity style={styles.btn}>
          <Image source={require("../assets/plus.png")} style={styles.image} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={workers}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <SendWorker {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  workersText: {
    fontSize: 27,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default Workers;
