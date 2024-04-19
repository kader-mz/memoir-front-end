import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
const handleInputChange = (field, value) => {
  setFormData({
    ...formData,
    [field]: value,
  });
};
const UserSetting = ({ formData }) => {
  return (
    <>
      <ScrollView style={styles.formSettingContainer}>
        <Text style={styles.text}>first name</Text>
        <TextInput
          label="First Name"
          style={styles.settingInput}
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.nativeEvent.text)}
        />
        <Text style={styles.text}>last name</Text>
        <TextInput
          label="Last Name"
          style={styles.settingInput}
          value={formData.lastName}
          onChange={(e) => handleInputChange("lastName", e.nativeEvent.text)}
        />
        <Text style={styles.text}>email</Text>
        <TextInput
          label="Email"
          style={styles.settingInput}
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.nativeEvent.text)}
        />
        <Text style={styles.text}>phone number</Text>
        <TextInput
          label="Phone Number"
          style={styles.settingInput}
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.nativeEvent.text)}
        />
        <Text style={styles.text}>address</Text>
        <TextInput
          label="Country"
          style={styles.settingInput}
          value={formData.country}
          onChange={(e) => handleInputChange("country", e.nativeEvent.text)}
        />
        <Text style={styles.text}>city</Text>
        <TextInput
          label="City"
          style={styles.settingInput}
          value={formData.city}
          onChange={(e) => handleInputChange("city", e.nativeEvent.text)}
        />
        <Text style={styles.text}>address</Text>
        <TextInput
          label="Address"
          style={styles.settingInput}
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.nativeEvent.text)}
        />
        <Text style={styles.text}>zip code</Text>
        <TextInput
          label="Zip Code"
          style={styles.settingInput}
          value={formData.zipCode}
          onChange={(e) => handleInputChange("zipCode", e.nativeEvent.text)}
        />
        <View style={styles.saveBtnContainer}>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save Changes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.saveBtn, { backgroundColor: "#ffd27f" }]}
          >
            <Text style={styles.saveBtnText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formSettingContainer: {
    padding: 10,
  },
  settingInput: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  text: {
    marginBottom: 10,
  },
  saveBtn: {
    backgroundColor: "#0083ff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    marginBottom: 50,
  },
  saveBtnText: {
    color: "white",
    fontSize: 15,
  },
  saveBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default UserSetting;
