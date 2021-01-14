import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Swipeable from '../components/swipeable.js'

const Overview = () => {
  return (
    <View style={styles.container}>
      {/* At the top, add a arrow that will takeyou back one step */}
      <View style={styles.header}>
        <Text style={{ color: "darkblue", fontSize: 30 }}>Overview page</Text>
      </View>
      <View style={styles.fotoContainer}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ width: 80, height: 80 }}
        />
        <Text>Name of user</Text>
      </View>
      <View style={styles.myExpenseTitle}>
<Text style={{fontSize:30,}}>My expenses</Text>
      </View>
      {/* Add a function that prints out all expenses, sorted after Recent purchase */}
      <View style={styles.allExpenses}>
        {/* <Text style={{borderWidth: 1,
    borderColor: 'orange'}}>Every Expense goes here</Text> */}
    <Swipeable />
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "blue",
    borderWidth: 1,
    width: "100%",
  },
  header: {
    backgroundColor: "lightblue",
    width: "100%",
    height: '10%',
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  fotoContainer: {
    height: '15%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  myExpenseTitle:{
    borderWidth: 1,
    borderColor: 'orange',
    height: '10%',
  },
  allExpenses: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: 'orange',
    height: '65%',
    width: '100%',
  },
});
