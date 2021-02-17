import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

//?============================================================================================
const Settings = (props) => {


  const confirmDelete = () => {
    Alert.alert(
      'Remove Account',
      'Are you sure?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => props.deleteUser()},
      ],
      { cancelable: false }  
    )
}
const confirmLogout = (rowMap, data, _id) => {
  Alert.alert(
    "Log out",
    "Are you sure?",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => props.logout(),
      },
    ],
    { cancelable: false }
  );
};
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              confirmLogout();
            }}
            style={styles.touch}
          >
            {/* ============================================ */}
            <Text style={styles.text}>Log out</Text>
  
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              confirmDelete();
            }}
            style={styles.touch}
          >
            {/* ============================================ */}
            <Text style={styles.text}>Delete Account</Text>
            {/* create an alert asking, are you sure */}
            {/* ============================================ */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
//?===================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f2",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  touch: {
    borderWidth: 1,
    borderColor: "#495464",
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 20,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  text: {
    fontFamily: "Helvetica",
    fontSize: 20,
  },
});
