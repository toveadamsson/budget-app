import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
//!=======================================
//!=======================================
export default function App(props) {
  const [category, setCategory] = useState("category");
  const [mode, setMode] = useState("category");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedCategory) => {
    const currentCategory = selectedCategory || props.form2.category;
    props.setValues({ ...props.form, category: currentCategory });
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  //!=======================================
  return (
    // <View style={styles.container}>
      <Picker
        style={{
          height: 120,
          width: "100%",
          justifyContent: "center",
        }}
        itemStyle={{
          color: "black",
          backgroundColor: "#e8e8e8",
          height: 120,
          fontFamily: "Helvetica",
        }}
        selectedValue={props.form.category}
    
        onValueChange={(itemValue, itemIndex) =>
          props.setValues({ ...props.form, category: itemValue })
        }
      >
        <Picker.Item label="Various" value="Various" />
        <Picker.Item label="Groceries" value="Groceries" />
        <Picker.Item label="Restaurant/Bars" value="Restaurant/Bars" />
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Bills" value="Bills" />
        <Picker.Item label="Transportation" value="Transportation" />
      </Picker>
    // </View>
  );
}

//!=======================================
//!=======================================
//!=======================================
//!=======================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f2",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
});
