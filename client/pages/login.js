import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
//?==============================================================================
const Login = ({ navigation, login }) => {
  const [form, setValues] = useState({
    email: "Toveadamsson@gmail.com",
    password: "Toad9009",
  });

  const test = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.54:3040/users/login",
        { ...form }
      );
      console.log(response.data);

      if (response.data.ok) {
        setTimeout(() => {
          login(response.data.token);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* --------------------------------------------------------------------- */}
      <View style={styles.textContainer}>
        <Text style={styles.introTitle}>Budget-App</Text>
        <View></View>
      </View>
      {/* -------------------------------------------------------------------- */}
      <View style={styles.inputContainer}>
        {/* --------------------------------------------------------------------- */}
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(text) => setValues({ ...form, email: text })}
            style={styles.input}
            placeholder={"E-mail"}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(text) => setValues({ ...form, password: text })}
            style={styles.input}
            placeholder={"Password"}
          ></TextInput>
        </View>
      </View>
      {/* ----------------------------------------------------------------- */}
      <View>
        <View>
          <TouchableOpacity
            style={styles.clickMe}
            onPress={() => {
              test();
            }}
          >
            <Text style={styles.loginButton}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*---------------------------------------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "Optima" }}>
          Haven't registered yet? Do it
        </Text>
        <TouchableOpacity
          style={styles.clickRegister}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.registerButton}>Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7de",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
  },
  textContainer: {
    // borderWidth: 0,
    // borderColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  imageLogo: {
    height: 100,
    width: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  introTitle: {
    fontSize: 70,
    fontWeight: "600",
    fontFamily: "Optima",

    color: "#008891",
    marginBottom: 10,
  },
  inputContainer: {
    height: 150,

    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#00587a",
    width: 330,
    padding: 15,
    fontSize: 20,
    fontFamily: "Optima",
  },
  clickMe: {
    borderRadius: 4,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#e0e0d3",
  },
  loginButton: {
    fontSize: 20,
    color: "#008891",
    fontFamily: "Optima",
  },
  clickRegister: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    fontFamily: "Optima",
  },
  registerButton: {
    color: "#008891",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Optima",
  },
});
