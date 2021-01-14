import React, {useState} from "react";
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
        <Text style={styles.introTitle}>Initial Page</Text>
        <View>
          <Image
            style={styles.imageLogo}
            source={require("../assets/circle.jpeg")}
          ></Image>
        </View>
      </View>
      {/* -------------------------------------------------------------------- */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* --------------------------------------------------------------------- */}
        <View
          // onChange={handleChange} onSubmit={handleSubmit}
          style={{ flexDirection: "row" }}
        >
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
          {/* ----------------------------------------------------------------- */}
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
            <Text>Click me</Text>
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
          onPress={() => {
            navigation.navigate("Register");
          }}
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
