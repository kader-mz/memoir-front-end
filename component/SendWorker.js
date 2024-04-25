import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SendWorker = ({ id, email, role, workers, setWorkers }) => {
  const [sendWorker, setSendWorker] = useState(false);
  const [workerInfo, setWorkerInfo] = useState({
    email: email,
    role: role,
  });

  const handleWorkerSend = () => {
    setSendWorker(true);
    workers.find((item) => {
      if (item.id === id) {
        item.email = workerInfo.email;
        item.role = workerInfo.role;
      }
    });
    setWorkers([...workers]);
  };

  const handleDeleteWorker = (id) => {
    const newWorkerList = workers.filter((item) => item.id !== id);
    setWorkers([...newWorkerList]);
  };
  return (
    <View style={styles.inputContainer}>
      {sendWorker && (
        <View style={styles.workerEdit}>
          <TouchableOpacity onPress={() => setSendWorker(false)}>
            <Image
              source={require("../assets/mod.png")}
              style={styles.editBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteWorker(id)}>
            <Image
              source={require("../assets/delete.png")}
              style={styles.editBtn}
            />
          </TouchableOpacity>
        </View>
      )}
      <TextInput
        style={styles.input}
        value={workerInfo.email}
        placeholder="Please add email"
        readOnly={sendWorker}
        placeholderTextColor="white"
        onChange={(e) =>
          setWorkerInfo({ ...workerInfo, email: e.nativeEvent.text })
        }
      />
      <Picker style={styles.picker}>
        <Picker.Item label="verifcation" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C#" value="csharp" />
      </Picker>
      {!sendWorker && (
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => handleWorkerSend()}
        >
          <Text style={styles.sendBtnText}>SEND</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "red",
    backgroundColor: "#1679AB",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    gap: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    color: "white",
    padding: 10,
  },
  sendBtn: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  sendBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  workerEdit: {
    width: "100%",
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
  },
  editBtn: {
    width: 25,
    height: 25,
  },
  picker: {
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    color: "white",
  },
});
export default SendWorker;
