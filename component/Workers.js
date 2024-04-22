import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SendWorker from "./SendWorker";
import { useState } from "react";
import uuid from "react-native-uuid";
const Workers = () => {
  const [workers, setWorkers] = useState([
    {
      id: uuid.v4(),
      email: "kader@gmail.com",
      role: "nazra3",
    },
  ]);

  const addNewWorker = () => {
    const newWorker = {
      id: uuid.v4(),
      email: "",
      role: "",
    };
    setWorkers([...workers, newWorker]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.workersText}>Workers</Text>
        <TouchableOpacity style={styles.btn} onPress={() => addNewWorker()}>
          <Image source={require("../assets/plus.png")} style={styles.image} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {workers.map((item) => {
          return (
            <SendWorker
              key={item.id}
              {...item}
              workers={workers}
              setWorkers={setWorkers}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
