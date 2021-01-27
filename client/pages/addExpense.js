import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import CategoryPicker from "../components/categoryPicker.js";
import DatePicker from "../components/datePicker.js";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


//?=======================================================================
const AddExpense = (props) => {
  const [form, setValues] = useState({
    item: "",
    amount: "",
    date: new Date(),
    category: "Various",
  });

  const test = async () => {
    // const token = req.headers.authorization;
    if (!form.item || !form.amount) return alert("missing field");
    try {
      // if (!form.amount === Number) return alert("missing proper number");
      const token = await AsyncStorage.getItem("token");
   
      axios.defaults.headers.common["Authorization"] = token;
      const response = await axios.post(
        "http://192.168.1.82:3040/expenses/add",
        {
          ...form,
          amount: Number(form.amount),
        }
      );
      console.log(response.data);
      if (response.data.ok) {
        alert("task created");
        setTimeout(() => {
          const temp = [...props.seeAll];
          temp.push(form);
          temp.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });
          props.setSeeAll(temp);
          props.setFiltered(temp);
          props.navigation.navigate("Overview");
          setValues({
            item: "",
            amount: 0,
            date: new Date(),
            category: "Various",
          })
        }, 2000);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //*===========================================
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add your Expense</Text>
      </View>
      <View style={styles.addContainer}>
        {/* =========================== WHAT ================================================= */}

        <View style={styles.amountContainer}>
          <TextInput
            numberOfLines={2}
            autoCorrect={false}
            value={form.item}
            // maxLength={22}
            style={styles.textInput}
            placeholder="Add Item"
            onChangeText={(text) => setValues({ ...form, item: text })}
          ></TextInput>
        </View>

        {/* =======================     AMOUNT   =============================================== */}
        <View style={styles.amountContainer}>
          <TextInput
          autoCorrect={false}
          // keyboardType="numeric"
          
            returnKeyType="done"
            autoCapitalize="none"
            style={styles.textInput}
            placeholder="Add Amount in €"
            value={form.amount}
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
          <Text style={styles.addMeText}>ADD</Text>
        </TouchableOpacity>
      </View>
      {/* ============================================================================ */}
    </View>
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
    backgroundColor: "#fff",
  },
  header: {
    
    backgroundColor: "lightgrey",
    width: "100%",
    height: "15%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 30,
    fontFamily: "Helvetica",
  },
  addContainer: {
    height: "73%",
  },
  textInput: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#bbbfca",
    width: "100%",
    paddingLeft: 5,
    color: "#495464",
    backgroundColor: "#e8e8e8",
    fontSize: 23,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    fontFamily: "Helvetica-Light",
  },
  amountContainer: {
    flexDirection: "row",
    color: "#bbbfca",
    backgroundColor: "#e8e8e8",
    height: 90,
    paddingHorizontal: 7,
    alignItems: "center",
  },
  addMe: {
    width: "40%",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#495464",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: "#e8e8e8",
    // marginBottom:55,

  },
  addMeText: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: "700",
    color: "black",
    fontFamily: "Helvetica",
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
