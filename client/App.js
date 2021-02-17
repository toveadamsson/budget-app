import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//?============================================================
//?============================================================
//?============================================================
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Settings from "./pages/settings.js";
import AddExpense from "./pages/addExpense";
import Overview from "./pages/overview";
import Chart from "./pages/chart.js";
//?============================================================
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//?============================================================
const { width, height } = Dimensions.get("window");
//?============================================================
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // alltid vara false
  const [seeAll, setSeeAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  //?============================================================
  useEffect(() => {
    const test = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token === null) return setIsLoggedIn(false);
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.get(
          "http://192.168.1.82:3040/users/verify_token"
        );
        response.data.token ? setIsLoggedIn(true) : setIsLoggedIn(false);
        console.log("response ==>", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, []);
  //?============================================================
  useEffect(() => {
    const test = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.get(
          "http://192.168.1.82:3040/expenses/get"
        );

        response.data.expenses.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });

        setSeeAll(response.data.expenses);
        setFiltered(response.data.expenses);
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, []);

  const filter = (text) => {
    const regex = new RegExp(text);
    if (text === "") return setFiltered(seeAll);
    const temp = seeAll.filter((el) =>
      el.item.search(regex) !== -1 ? el : null
    );
    setFiltered(temp);
    return;
  };
  //?============================================================
  const login = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };
  //?============================================================
  const logout = async (token) => {
    try {
      await AsyncStorage.removeItem("token");
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
    // const temp = seeAll.removeItem((el)=> )

  };
  //?========================================================
  const deleteUser = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      axios.defaults.headers.common["Authorization"] = token;
      const response = await axios.delete(
        "http://192.168.1.82:3040/users/deleteaccount"
      );
      response.data.token ? setIsLoggedIn(true) : setIsLoggedIn(false);
      console.log("response ==>", response.data);
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  };
  //?========================================================
  return (
    <>
      {!isLoggedIn ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
            topBarOptions={{
              display: "none",
            }}
          >
            <Stack.Screen name="Login">
              {(props) => <Login {...props} login={login} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Add") {
                  iconName = focused ? "form" : "form";
                } else if (route.name === "Settings") {
                  iconName = focused ? "setting" : "setting";
                } else if (route.name === "Overview") {
                  iconName = focused ? "search1" : "search1";
                } else if (route.name === "Chart") {
                  iconName = focused ? "dotchart" : "dotchart";
                }
                // You can return any component that you like here!
                return (
                  <View style={{width:width/4, alignItems:'center'}}>
                    <AntDesign name={iconName} size={size} color={color} />
                    {/* <Text>Add</Text> */}
                  </View>
                );
              },
            })}
            tabBarOptions={{
              showLabel: false,
              flexDirection: "column",
              activeTintColor: "#6a8e91",
              inactiveTintColor: "white",
              style: {
                paddingBottom: 5,
                height: 60,
                backgroundColor: "#6b7d65",
              },
            }}
          >
            {/* <Tab.Screen name="AddExpense" component={AddExpense} /> */}
            <Tab.Screen name="Add">
              {(props) => (
                <AddExpense
                  {...props}
                  seeAll={seeAll}
                  setSeeAll={setSeeAll}
                  setFiltered={setFiltered}
                />
              )}
            </Tab.Screen>
            {/* <Tab.Screen name="Overview" component={Overview} /> */}
            <Tab.Screen name="Overview">
              {(props) => (
                <Overview
                  filter={filter}
                  {...props}
                  filtered={filtered}
                  setFiltered={setFiltered}
                  seeAll={seeAll}
                  setSeeAll={setSeeAll}
                />
              )}
            </Tab.Screen>
            <Tab.Screen name="Chart">
              {(props) => <Chart seeAll={seeAll} />}
            </Tab.Screen>
            <Tab.Screen name="Settings">
              {(props) => <Settings logout={logout} deleteUser={deleteUser} />}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f2",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Helvetica",
  },
});
