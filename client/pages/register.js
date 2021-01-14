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
const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.introTitle}>Register Page</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        
      <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.email}>Your name</TextInput>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.email}>Email</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.email}>Password</TextInput>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.email}>Password again </TextInput>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.email}>Your income </TextInput>
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
            onPress={()=> {navigation.navigate('Login')}}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
        <View
        style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
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
            onPress={()=> {navigation.navigate('Login')}}
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
