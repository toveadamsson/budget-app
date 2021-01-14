import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';
//?============================================================================================
const Register = ({ navigation }) => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    income: 0,
  });
  const test = async() =>{
    try{
        const response = await axios.post('http://localhost:3040/test-route', form)
        if(response.data.ok)return navigation.navigate("Login")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.introTitle}>Register Page</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.email}>Your name</Text>
          <TextInput
            onChangeText={(text) => setValues({ ...form, name: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.email}>Email</Text>
          <TextInput
            onChangeText={(text) => setValues({ ...form, email: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.email}>Password</Text>
          <TextInput
            onChangeText={(text) => setValues({ ...form, password: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            
            style={styles.email}
          >
            Password again
          </Text>
          <TextInput onChangeText={(text) => setValues({ ...form, password2: text })}style={styles.textInput}></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.email}>Your income</Text>
          <TextInput
            onChangeText={(text) => setValues({ ...form, income: text })}
            style={styles.textInput}
          ></TextInput>
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
            onPress={() => {
              test()

              // navigation.navigate("Login");
            }}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Already a member?</Text>
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
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text>Login</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: 3,
    width: "100%",
  },
  introTitle: {
    fontSize: 30,
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "green",
  },
  inputContainer: {
    width: "100%",
    height: "30%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    width: 120,
    marginLeft: 5,
  },
});
