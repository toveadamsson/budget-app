import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import About from "../pages/about.js";
const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "darkblue", fontSize: 40, fontFamily: "Optima" }}>
          Settings page
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.onTouch} onPress={() => {}}>
          <Text style={styles.text}>Click me to change income</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.onTouch} onPress={() => {}}>
            <Text style={styles.text} t>
              Click me to change currency
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.onTouch} onPress={() => {}}>
          <Text style={styles.text}>Click me to log out</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.onTouch} onPress={() => {}}>
          <Text style={styles.text}>Click me to delete account</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.onTouch} onPress={() => {}}>
          <Text style={styles.text}>Click me to read About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7de",

    width: "100%",
  },
  header: {
    backgroundColor: "#e0e0d3",
    width: "100%",
    height: "15%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#00587a",
    fontSize: 20,
    fontFamily: "Optima",
  },
  onTouch: {
    borderBottomWidth: 2,
    borderBottomColor: "#00587a",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
});
