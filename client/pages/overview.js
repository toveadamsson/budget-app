import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "../components/swipeable.js";
import axios from "axios";
import { useLinkProps } from "@react-navigation/native";
const Overview = (props) => {
  return (
    <View style={styles.container}>
      {/* At the top, add a arrow that will take you back one step */}
      <View style={styles.header}>
        <Text style={{ color: "#e7e7de", fontSize: 30, fontFamily: "Optima" }}>
          Overview page
        </Text>
      </View>
      <View style={styles.fotoContainer}>
        <Text style={{ color: "#008891" }}>Name</Text>
      </View>
      <View style={styles.myExpenseTitle}>
        <Text style={{ fontSize: 30, color: "#00587a", fontFamily: "Optima" }}>
          My expenses
        </Text>
      </View>
      <View style={styles.allExpenses}>
        <Swipeable expenses={props.seeAll}  />
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0d3",
    width: "100%",
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
  fotoContainer: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  myExpenseTitle: {
    height: "10%",
    borderWidth: 1,
    borderColor: "green",
  },
  allExpenses: {
    height: "60%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "orange",
  },
});
