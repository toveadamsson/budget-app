import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CategoryPicker from "../components/categoryPicker.js";
import DatePicker from "../components/datePicker.js";
import TimePicker from "../components/timePicker"
const AddExpense = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "darkblue", fontSize: 30 }}>
          Add expense Page
        </Text>
      </View>
      <View style={styles.addContainer}>
        {/* =========================== WHAT ================================================= */}

        <View style={{ flexDirection: "row", borderColor: 'purple', borderWidth:2, margin:5, padding:5, }}>
          <Text style={styles.text}>What</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        {/* <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>When</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View> */}

         {/* =======================     HOW MUCH   =============================================== */}

        <View style={{ flexDirection: "row",borderColor: 'purple', borderWidth:2, margin:5,padding:5,}}>
          <Text style={styles.text}>How much</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        {/* ============================     DATE    =========================================== */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "green",
          }}
        >
          {/* <Text style={styles.text}>Date</Text> */}
          <DatePicker />
        </View>
        {/* ============================     TIME    =========================================== */}

{/* 
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "green",
          }}
        >
          <Text style={styles.text}>Time</Text>
          <TimePicker />
        </View> */}

       
        {/* =======================      CATEGORY      ========================================== */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "green",
          }}
        >
          {/* <Text style={styles.text}>Category</Text> */}
          <CategoryPicker />
        </View>
        {/* ============================================================================ */}
      </View>
      {/* =========================        ADD ME          ====================================== */}
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "brown",
            marginTop: 5,
            alignItems: "center",
            paddingHorizontal: 5,
            paddingVertical: 10,
          }}
          onPress={() => {}}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Add me</Text>
        </TouchableOpacity>
      </View>
      {/* ============================================================================ */}
    </View>
  );
};
export default AddExpense;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "blue",
    borderWidth: 5,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    backgroundColor: "lightblue",
    width: "100%",
    height: "10%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom:'50%',
  },
  addContainer: {
    borderWidth: 4,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  text: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightblue",
    margin: 5,
    paddingVertical: 5,
    width: '70%',
  },
});
