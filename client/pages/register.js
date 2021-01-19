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
//?============================================================================================
const Register = ({ navigation }) => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    income: 0,
  });
  const test = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.54:3040/users/register",
        { ...form }
      );
      console.log(response.data);
      // const response = await axios.post('192.168.1.54:3040/users/register', form)
      if (response.data.ok) return navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.introTitle}>Register Page</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder={"Name"}
            onChangeText={(text) => setValues({ ...form, name: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder={"Email"}
            onChangeText={(text) => setValues({ ...form, email: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder={"Password"}
            onChangeText={(text) => setValues({ ...form, password: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder={"Password again"}
            onChangeText={(text) => setValues({ ...form, password2: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder={"Your income"}
            onChangeText={(text) =>
              setValues({ ...form, income: Number(text) })
            }
            style={styles.textInput}
          ></TextInput>
        </View>

        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#00587a",
              borderRadius: 4,
              marginTop: 5,
              marginBottom: 20,
              paddingTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 5,
            }}
            onPress={() => {
              test();

              // navigation.navigate("Login");
            }}
          >
            <Text style={{fontFamily: 'Optima',  fontSize: 20,}}>Register</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Text style={{fontFamily: 'Optima',}}>Already a member?</Text>
          <TouchableOpacity
            style={{
              borderRadius: 4,
              marginVertical: 5,
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: "#e0e0d3",
              marginLeft: 5,
            }}
            
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{fontSize: 20,fontFamily: 'Optima',}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7de",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  introTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: "#008891",
    marginBottom: 10,
    fontFamily: 'Optima',
  },
  inputContainer: {
    width: "100%",
    height: "30%",
    borderColor: "#00587a",
    borderWidth: 3,
    
  },
  textInput: {
    fontFamily:'Optima',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#00587a",
    marginBottom: 5,
    width: 300,
    height: 40,
    marginLeft: 5,
    padding: 5,
    marginVertical: 5,
    
  },
});
