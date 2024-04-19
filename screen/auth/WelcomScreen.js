import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../constants/colors";
import Button from "../../component/Button";
const WelcomScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={styles.container}>
        <View style={styles.heroImagesContainer}>
          <Image
            source={require("../../assets/welcomepagepicture.jpg")}
            style={[
              styles.heroImage,
              {
                top: 30,
                right: 35,
                width: 300,
                height: 300,
              },
            ]}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Let's Get</Text>
          <Text style={styles.subtitle}>Started</Text>

          <View style={{ marginVertical: 22 }}>
            <Text style={styles.description}>
              Are you ready to easily manage your agricultural resources?
            </Text>
            <Text style={styles.description}>
              feel free to try our mobile application.
            </Text>
          </View>

          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("signup")}
            style={styles.button}
          />

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account ?</Text>
            <Pressable onPress={() => navigation.navigate("login")}>
              <Text style={styles.loginLink}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  heroImagesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    transform: [{ translateY: 50 }],
  },
  contentContainer: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
  },
  title: {
    fontSize: 45,
    fontWeight: "800",
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.white,
  },
  description: {
    fontSize: 16,
    color: COLORS.white,
    marginVertical: 4,
  },
  button: {
    marginTop: 15,
    width: "100%",
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
    color: COLORS.white,
  },
  loginLink: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
    marginLeft: 4,
  },
};

export default WelcomScreen;
