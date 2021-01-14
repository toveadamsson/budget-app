import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import About from "../pages/about.js"
const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "darkblue", fontSize: 30 }}>Overview page</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "brown",
            marginTop: 5,
            marginBottom: 5,
            paddingTop: 5,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
          }}
          onPress={() => {}}
        >
          <Text>Click me to change income</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "brown",
              marginTop: 5,
              marginBottom: 5,
              paddingTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 5,
            }}
            onPress={() => {}}
          >
            <Text>Click me to change currency</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "brown",
            marginTop: 5,
            marginBottom: 5,
            paddingTop: 5,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
          }}
          onPress={() => {}}
        >
          <Text>Click me to log out</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "brown",
            marginTop: 5,
            marginBottom: 5,
            paddingTop: 5,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
          }}
          onPress={() => {}}
        >
          <Text>Click me to delete account</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "brown",
            marginTop: 5,
            marginBottom: 5,
            paddingTop: 5,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
          }}
          onPress={() => {}}
        >
          <Text>Click me to read About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "blue",
    borderWidth: 10,
    width: "100%",
  },
  header: {
    backgroundColor: "lightblue",
    width: "100%",
    height: 50,
    alignSelf: "flex-start",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
