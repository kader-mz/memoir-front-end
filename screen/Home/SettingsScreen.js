import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import UserSetting from "../../component/UserSetting";

export default function SettingsScreen() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    country: "USA",
    city: "New York",
    address: "123 Main St",
    zipCode: "10001",
  });
  const [myDetails, setMyDetails] = useState(false);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}
    >
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
                }}
                style={styles.profileAvatar}
              />

              <TouchableOpacity>
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.profileName}>John Doe</Text>

            <Text style={styles.profileAddress}>
              123 Maple Street. Anytown, PA 17101
            </Text>
          </View>
        </View>
        {myDetails ? (
          <UserSetting
            formData={formData}
            setFormData={setFormData}
            setMyDetails={setMyDetails}
          />
        ) : (
          <TouchableOpacity
            style={styles.settingWrapper}
            onPress={() => setMyDetails(true)}
          >
            <Image
              source={require("../../assets/setting.png")}
              style={styles.settingImg}
            />

            <View style={styles.settingTextContainer}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>General</Text>
              <Text style={{ fontSize: 12, color: "#9a9a9a" }}>
                Profile Setting
              </Text>
            </View>
            <Image
              source={require("../../assets/rightArrow.png")}
              style={styles.settingImg}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    gap: 20,
  },
  /** Profile */
  profile: {
    padding: 24,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#40679E",
    borderRadius: 20,
    width: "95%",
    alignSelf: "center",
    marginTop: 5,
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: "absolute",
    right: -4,
    bottom: -10,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: "#007bff",
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  /** Section */
  formSettingContainer: {
    padding: 10,
  },
  settingInput: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  settingWrapper: {
    width: "90%",
    marginLeft: 20,
    borderRadius: 10,
    height: "10%",
    padding: 20,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingImg: {
    width: 25,
    height: 25,
  },
  settingTextContainer: {
    flexDirection: "column",
    marginRight: 110,
  },
});
