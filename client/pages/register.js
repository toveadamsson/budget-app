import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
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
    if(form.password.length  < 8){
      return Alert.alert('password needs to have min 8 characters')
    }
    try {
      const response = await axios.post(
        "http://192.168.1.82:3040/users/register",
        { ...form }
      );
      console.log(response.data);
      // const response = await axios.post('192.168.1.82:3040/users/register', form)
      if (response.data.ok) return navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View  style={styles.container} >
      <Text style={styles.introTitle}>Register Page</Text>
      <KeyboardAvoidingView style={{ justifyContent: "center", alignItems: "center" }}behavior={Platform.OS == "ios" ? "padding" : "height" }>
        <View style={{ flexDirection: "row" }}>
          <TextInput
          autoCorrect={false}
            placeholder={"Name"}
            onChangeText={(text) => setValues({ ...form, name: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
          autoCorrect={false}
           keyboardType="email-address"
           autoCapitalize="none"
            placeholder={"Email"}
            onChangeText={(text) => setValues({ ...form, email: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.default}
          autoCapitalize="none"
            placeholder={"Password"}
            onChangeText={(text) => setValues({ ...form, password: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.default}
          autoCapitalize="none"
            placeholder={"Password again"}
            onChangeText={(text) => setValues({ ...form, password2: text })}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
          autoCorrect={false}
          autoCapitalize="none"
            placeholder={"Your income"}
            onChangeText={(text) =>
              setValues({ ...form, income: Number(text) })
            }
            style={styles.textInput}
          ></TextInput>
        </View>
        </KeyboardAvoidingView>
{/* ========================== */}
        <View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#495464",
              borderRadius: 4,
              marginTop: 15,
              width:'50%',
              height:40,
              justifyContent:'center',
              alignContent:'center',
              paddingLeft:15,
              marginLeft:45,
              marginBottom:40,
            }}
            onPress={() => {
              test();
            }}
          >
            <Text style={{fontFamily: 'Optima',  fontSize: 23,}}>Register</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <Text style={{fontFamily: 'Optima',fontSize:18,}}>Already a member?</Text>
          <TouchableOpacity
            style={{
              borderRadius: 4,
              marginVertical: 5,
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: "#e8e8e8",
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
    backgroundColor: "#f4f4f2",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  introTitle: {
    fontSize: 40,
    fontWeight: "600",
    color: "#bbbfca",
    marginBottom: 10,
    fontFamily: 'Optima',
  },
  inputContainer: {
    width: "100%",
    height: "40%",
    borderColor: "#495464",
    borderWidth: 3,
    
  },
  textInput: {
    fontFamily:'Optima',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#495464",
    marginBottom: 5,
    width: 300,
    height: 50,
    marginLeft: 5,
    padding: 5,
    marginVertical: 5,
    fontSize:22.5,
  },
});
