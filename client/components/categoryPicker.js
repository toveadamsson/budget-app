import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function App() {
  const [currency, setCurrency] = useState("Categories");
  return (
    <View style={styles.container}>
      <Picker
        style={{
          height: 70,
          width: "100%",
          justifyContent: "center",
          // borderWidth: 5,
          // borderColor: "red",
        }}
        itemStyle={{ color: "#008891", backgroundColor:'#e0e0d3', height: 70,}}
        selectedValue={currency}
        onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
      >
        <Picker.Item label="Choose a Category" value="Choose a Category" />
        <Picker.Item label="Groceries" value="Groceries" />
        <Picker.Item label="Restaurant/Bars" value="Restaurant/Bars" />
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Bills" value="Bills" />
        <Picker.Item label="Transportation" value="Transportation" />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7de",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "yellow",
  },
});
