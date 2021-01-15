import React, { useEffect }from "react";
import { StyleSheet, View, Text, Image, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swipeable from "../components/swipeable.js";

const Overview = () => {
  const [seeAll, setSeeAll] = useState()
  useEffect(() => {
    const test = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.get(
          "http://192.168.1.54:3040/expenses/verify_token"
        );
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, []);




  return (
    <View style={styles.container}>
      {/* At the top, add a arrow that will takeyou back one step */}
      <View style={styles.header}>
        <Text style={{ color: "#00587a", fontSize: 30 }}>Overview page</Text>
      </View>
      <View style={styles.fotoContainer}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ width: 80, height: 80 }}
        />
        <Text style={{ color: "#008891" }}>Name</Text>
      </View>
      <View style={styles.myExpenseTitle}>
        <Text style={{ fontSize: 30, color: "#00587a" }}>My expenses</Text>
      </View>
      {/* Add a function that prints out all expenses, sorted after Recent purchase */}
      <View style={styles.allExpenses}>
        <Swipeable />
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0d3",
    borderColor: "blue",
    borderWidth: 1,
    width: "100%",
  },
  header: {
    height: "15%",
    width: "100%",
    backgroundColor: "#e0e0d3",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  fotoContainer: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
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
