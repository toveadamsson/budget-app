import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
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
        "http://192.168.1.82:3040/users/login",
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
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height" }>
      {/* --------------------------------------------------------------------- */}
      <View style={styles.textContainer}>
        <Text style={styles.introTitle}>little helper</Text>
        <View></View>
      </View>
      {/* -------------------------------------------------------------------- */}
      <View style={styles.inputContainer}>
        {/* --------------------------------------------------------------------- */}
        <View style={{ flexDirection: "row" }}>
          <TextInput
          autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setValues({ ...form, email: text })}
            style={styles.input}
            placeholder={"Email"}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
          autoCorrect={false}
            secureTextEntry={true}
            style={styles.default}
            autoCapitalize="none"
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
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*---------------------------------------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop:20,
        }}
      >
        <Text style={{ fontFamily: "Helvetica",fontSize:18, }}>
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
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f2",
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
    fontFamily: "Helvetica",
    color: "#bbbfca",

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
    borderColor: "#495464",
    width: 330,
    padding: 12,
    fontSize: 25,
    fontFamily: "Helvetica-Light",
  },
  clickMe: {
    borderRadius: 4,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#e8e8e8",
  },
  loginButton: {
    fontSize: 20,
    color: "#495464",
    fontFamily: "Helvetica",
  },
  clickRegister: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    fontFamily: "Helvetica",
  },
  registerButton: {
    color: "#495464",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Helvetica",
    borderWidth:1,
    borderColor:'grey',
    borderRadius:4,
    padding:3,
  },
});
