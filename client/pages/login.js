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
const Login = ({ navigation }) => {
  const [form, setValues] = useState({
    email: "",
    password: "",
  });

  // const handleSubmit = async (e) => {
  //   try {
  //     const response = await axios.post(`http://localhost:3040/users/login`, {
  //       email: form.email,
  //       password: form.password,
  //     });

  //     setMessage(response.data.message);

  //     if (response.data.ok) {
  //       setTimeout(() => {
  //         props.login(response.data.token);
  //         props.history.push("/secret-page");
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* --------------------------------------------------------------------- */}
      <View style={styles.textContainer}>
        <Text style={styles.introTitle}>Budget-App</Text>
        <View>
          <Image
            style={styles.imageLogo}
            source={require("../assets/circle.jpeg")}
          ></Image>
        </View>
      </View>
      {/* -------------------------------------------------------------------- */}
      <View style={styles.inputContainer}>
        {/* --------------------------------------------------------------------- */}
        <View
          // onChange={handleChange} onSubmit={handleSubmit}
          style={{ flexDirection: "row" }}
        >
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
          <TouchableOpacity style={styles.clickMe} onPress={() => {}}>
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
        <Text>Haven't registered yet? Do it</Text>
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
    borderColor: "#008891",
    borderWidth: 5,
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
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  introTitle: {
    fontSize: 70,
    fontWeight: "600",
    // borderWidth: 1,
    // borderColor: "green",
    color: '#008891',
    marginBottom:10,
    
  },
  inputContainer: {
    height: 150,
    // borderWidth: 1,
    // borderColor: "red",
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
  },
  clickMe: {
    // borderWidth:0,
    // borderColor: "#00587a",
    borderRadius: 4,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor:'#e0e0d3',
  },
  loginButton:{
    fontSize:20,
    color: '#008891',
  },
  clickRegister: {
    // backgroundColor: "lightgrey",
    // borderWidth: 1,
    // borderColor: "grey",
    marginLeft: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  registerButton:{
    color: '#008891',
    fontWeight: 'bold',
   
    fontSize: 20,
  }
});
