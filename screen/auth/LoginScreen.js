import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useGlobalContext } from "../../contextapi/useGlobalContext";

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { setIsLogin } = useGlobalContext();
  const handleLogin = () => {
    // Clear previous errors
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    // Implement your login logic here (e.g., API calls to the backend)
    console.log("Logging in with:", email, password);
  };

  const handleSignup = () => {
    navigation.navigate("signup");
  };

  const handleForgotPassword = () => {
    // Implement your navigation to forgot password page logic here
    console.log("Navigate to forgot password page");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/avatar.png")} style={styles.image} />
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Welcom back
        </Text>
        <Text
          style={{
            color: "#9a9a9a",
            fontSize: 18,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Sign to continue
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
          setEmailError("");
        }}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError("");
        }}
      />
      <TouchableOpacity
        onPress={handleForgotPassword}
        style={{ width: "100%" }}
      >
        <Text style={styles.footerText}>Forgot Password?</Text>
      </TouchableOpacity>
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signup}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.sinuptext}>Create a new account</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setIsLogin(true)}>
        <Text style={styles.gest}>Guest?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 60,
    borderRadius: 10,
    borderColor: "#e9e9e9",
    color: "#1aff01",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1aff01",
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
  footerText: {
    color: "#1aff01",
    fontWeight: "bold",
    alignItems: "flex-end",
    width: "90%",
    textAlign: "right",
  },
  error: {
    color: "red",
    marginBottom: 5,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginVertical: 30,
  },
  sinuptext: {
    color: "#1aff01",
  },
  gest: {
    position: "absolute",
    top: 20,
    right: 100,
    backgroundColor: "red",
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    pointerEvents: "none",
  },
});

export default LoginScreen;
