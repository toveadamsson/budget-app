import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,

} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "../components/swipeable.js";
import { useLinkProps } from "@react-navigation/native";

const Overview = (props) => {
  // console.log('props from overview', props)
  return (
    <View

      style={styles.container}
    >
      {/* At the top, add a arrow that will take you back one step */}
      <View style={styles.header}>
        <Text style={{ color: "black", fontSize: 35, fontFamily: "Helvetica" }}>
          Overview
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          bordercolor: "black",
          height: 50,
          margin: 5,
          flexDirection: "row",
        }}
      >
        <TextInput
        placeholder="  Filter items"
        autoCorrect={false}
          onChangeText={(text) => {
            props.filter(text);
          }}
          style={{
            borderWidth: 0.5,
            borderColor: "#495464",
            width: "80%",
            fontSize: 25,
            color: "#495464",
            fontFamily: "Helvetica-Light",
          }}
        ></TextInput>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#495464",
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#495464",
          }}
        >
          <Text
            style={{ color: "#e8e8e8", fontFamily: "Helvetica-Light", fontSize: 25 }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
      {/* ============================================== */}
      <ScrollView style={styles.allExpenses}>
        <Swipeable
          expenses={props.seeAll}
          filtered={props.filtered}
          setSeeAll={props.setSeeAll}
          setFiltered={props.setFiltered}
        />
      </ScrollView>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  header: {
    backgroundColor: "lightgrey",
    paddingBottom: 5,
    width: "100%",
    height: "15%",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  allExpenses: {
    height: "100%",
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
