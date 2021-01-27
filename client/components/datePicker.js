import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
//!=======================================
//!=======================================
export default function App(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.form.date;
    props.setValues({ ...props.form, date: currentDate });
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  //!=======================================
//!=======================================
  return (
    <View style={{ height: 120, width: "100%" }}>
      <DateTimePicker
        style={styles.container}
        testID="dateTimePicker"
        value={props.form.date}
        mode={mode}
        is24Hour={true}
        display="spinner"
        onChange={onChange}
      />
    </View>
  );
}

//!=======================================
//!=======================================
//!=======================================
//!=======================================
const styles = StyleSheet.create({
  container: {
    height: 120,
    color: "#495464",
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
  },
});
