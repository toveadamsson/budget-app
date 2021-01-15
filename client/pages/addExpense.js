import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import CategoryPicker from "../components/categoryPicker.js";
import DatePicker from "../components/datePicker.js";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//?==============================================================================

const AddExpense = (navigation) => {


  const [form, setValues] = useState({
    item: "Coffee",
    amount: 10,
    date:"hello",
    category:"hello",
  });
  const test = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
  
      axios.defaults.headers.common["Authorization"] = token;
      const response = await axios.post("http://192.168.1.54:3040/expenses/add", {
        ...form,
      });
      console.log(response.data);
      // const response = await axios.post('192.168.1.54:3040/users/register', form)
      // if(response.data.ok)return navigation.navigate("Login")
      if (response.data.ok) {
        setTimeout(() => {
          alert('task created')
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <View style={styles.header}>
        <Text style={{ color: "#00587a", fontSize: 30 }}>Add expense Page</Text>
      </View>
      <View style={styles.addContainer}>
        {/* =========================== WHAT ================================================= */}

        <View style={styles.amountContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add Item"
            onChangeText={(text) => setValues({ ...form, item: text })}
          ></TextInput>
        </View>

        {/* =======================     AMOUNT   =============================================== */}

        <View style={styles.amountContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add Amount"
            onChangeText={(text) => setValues({ ...form, amount: text })}
          ></TextInput>
        </View>
        {/* ============================     DATE    =========================================== */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DatePicker
            onChangeText={(text) => setValues({ ...form, date: text })}
          />
        </View>
        {/* =======================      CATEGORY      ========================================== */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CategoryPicker
            onChangeText={(text) => setValues({ ...form, category: text })}
          />
        </View>
        {/* ============================================================================ */}
      </View>
      {/* =========================        ADD ME          ====================================== */}
      <View>
        <TouchableOpacity
          style={{
            width: "40%",
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "#0f3057",
            alignItems: "center",
            paddingHorizontal: 5,
            paddingVertical: 10,
            alignSelf: "center",
            backgroundColor: "#e0e0d3",
          }}
          onPress={() => {
            navigation.navigate("Overview")
            test();
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              color: "#0f3057",
              // borderColor: "black",
              // borderWidth: 1,
            }}
          >
            Add me
          </Text>
        </TouchableOpacity>
      </View>
      {/* ============================================================================ */}
    </KeyboardAvoidingView>
  );
};
export default AddExpense;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#e7e7de",
  },
  header: {
    backgroundColor: "#e0e0d3",
    width: "100%",
    height: "15%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",

  },
  addContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
  textInput: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#008891",
    width: "100%",
    paddingLeft: 5,
    color: "#008891",
    backgroundColor: "#e0e0d3",
    fontSize: 23,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // textDecorationLine: 'underline'
  },
  amountContainer: {
    flexDirection: "row",
    color: "#008891",
    backgroundColor: "#e0e0d3",
    height: 70,
    paddingHorizontal: 7,
    // borderWidth: 1,
    // borderColor: "green",
    alignItems: "center",
  },
});
