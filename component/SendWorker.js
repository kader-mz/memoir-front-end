import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SendWorker = ({ email, role }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} value={email} />
      <TextInput style={styles.input} value={role} />
      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendBtnText}>SEND</Text>
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
    backgroundColor: "green",
  },
  sendBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
export default SendWorker;
