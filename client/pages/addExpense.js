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

//?=============================================================================
const AddExpense = (props) => {
  const [form, setValues] = useState({
    item: "",
    amount: 0,
    date: new Date(),
    category: "Various",
  });

  const test = async () => {
    // const token = req.headers.authorization;
    if (!form.item || !form.amount) return alert("missing field");
    try {
      // if (!form.amount === Number) return alert("missing proper number");
      const token = await AsyncStorage.getItem("token");
      // console.log("form=======>",form);
      axios.defaults.headers.common["Authorization"] = token;
      const response = await axios.post(
        "http://192.168.1.54:3040/expenses/add",
        {
          ...form,
          amount: Number(form.amount),
        }
      );
      console.log(response.data);
      if (response.data.ok) {
        alert("task created");
        setTimeout(() => {
          props.navigation.navigate("Overview");
        }, 2000);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const clear = async () => {
  //   try {
  //     setValues({ item: "", amount: 0 });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //*===========================================
  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add expense Page</Text>
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

        <View style={styles.inputField}>
          <DatePicker setValues={setValues} form={form} />
        </View>
        {/* =======================      CATEGORY      ========================================== */}
        <View style={styles.inputField}>
          <CategoryPicker setValues={setValues} form={form} />
        </View>
        {/* ============================================================================ */}
      </View>
      {/* =========================        ADD ME        ====================================== */}
      <View>
        <TouchableOpacity
          style={styles.addMe}
          onPress={() => {
            test();
          }}
        >
          <Text style={styles.addMeText}>Add me</Text>
        </TouchableOpacity>
      </View>
      {/* ============================================================================ */}
    </KeyboardAvoidingView>
  );
};
export default AddExpense;
//!===================================================================
//!===================================================================
//!===================================================================
//!===================================================================
//!===================================================================
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#e7e7de",
  },
  header: {
    backgroundColor: "#00587a",
    paddingBottom: 5,
    width: "100%",
    height: "15%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#e7e7de",
    fontSize: 30,
    fontFamily: "Optima",
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
    fontFamily: "Optima",
  },
  amountContainer: {
    flexDirection: "row",
    color: "#008891",
    backgroundColor: "#e0e0d3",
    height: 90,
    paddingHorizontal: 7,
    alignItems: "center",
  },
  addMe: {
    width: "40%",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#0f3057",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: "#e0e0d3",
  },
  addMeText: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: "700",
    color: "#0f3057",
    fontFamily: "Optima",
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
