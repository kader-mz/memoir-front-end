import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Signup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    navigation.navigate("login");
  };

  const handleSignup = () => {
    // api back end call to sign up
    console.log("Signing up with:", formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Create a new account</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputUpperText}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("name", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputUpperText}>Email</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("email", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputUpperText}>Password</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("password", text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputUpperText}>Phone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange("phone", text)}
        />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <View style={styles.login} onPress={handleLogin}>
          <Text style={styles.loginText}>Already have accout?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={{ color: "#1aff01", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputUpperText: {
    position: "absolute",
    top: -10,
    left: 50,
    backgroundColor: "white",
    zIndex: 20,
    paddingHorizontal: 10,
    color: "#9a9a9a",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1b3011",
  },
  subtitle: {
    marginBottom: 40,
    color: "#d4d4d4",
  },
  input: {
    width: "80%",
    height: 60,
    borderColor: "#e9e9e9",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1aff01",
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  btns: {
    width: "80%",
    justifyContent: "space-between",
  },
  login: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  loginText: {
    color: "black",
  },
});

export default Signup;
