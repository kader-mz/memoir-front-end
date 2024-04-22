import { useState } from "react";
import {
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
    setSendWorker(!sendWorker);
    workers.find((item) => {
      if (item.id === id) {
        item.email = workerInfo.email;
        item.role = workerInfo.role;
      }
    });
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={workerInfo.email}
        placeholder="Please add email"
        readOnly={sendWorker}
        onChange={(e) =>
          setWorkerInfo({ ...workerInfo, email: e.nativeEvent.text })
        }
      />
      <TextInput
        style={styles.input}
        value={workerInfo.role}
        readOnly={sendWorker}
        placeholder="Please add role"
        onChange={(e) =>
          setWorkerInfo({ ...workerInfo, role: e.nativeEvent.text })
        }
      />
      <TouchableOpacity
        style={[
          styles.sendBtn,
          { backgroundColor: sendWorker ? "red" : "green" },
        ]}
        onPress={() => handleWorkerSend()}
      >
        <Text style={styles.sendBtnText}>{sendWorker ? "UNSEND" : "SEND"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "red",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    marginTop: 10,
  },
  sendBtn: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
export default SendWorker;
