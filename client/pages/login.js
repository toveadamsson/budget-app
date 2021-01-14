import React from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

//?============================================================================================
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* ---------------------------------------------------------------------------------------- */}
      <View style={styles.textContainer}>
        <Text style={styles.introTitle}>Initial Page</Text>
        <View>
          <Image
            style={styles.imageLogo}
            source={require("../assets/circle.jpeg")}
          ></Image>
        </View>
      </View>
      {/* ---------------------------------------------------------------------------------------- */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.email}>Email</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.email}>Password</TextInput>
          <TextInput style={styles.textInput}></TextInput>
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
            onPress={()=> {}}
          >
            <Text>Click me</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ---------------------------------------------------------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Haven't registered yet? Do it</Text>
        <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "black",
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 5,
              paddingTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 5,
            }}
            onPress={()=> {navigation.navigate('Register')}}
          >
            <Text>Here</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: 5,
    width: "100%",
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  imageLogo: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  introTitle: {
    fontSize: 70,
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    width: 120,
    marginLeft: 5,
  },
  email: {
    color: "green",
  },
});
