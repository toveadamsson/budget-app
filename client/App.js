import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
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
//?============================================================
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//?============================================================
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    const test = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token === null) return setIsLoggedIn(false);
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.get(
          "http://192.168.1.54:3040/users/verify_token"
        );
        response.data.token ? setIsLoggedIn(true) : setIsLoggedIn(false);
        console.log("response ==>", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, []);

  const login = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  //?========================================================
  return (
    <>
      {!isLoggedIn ? (
        <NavigationContainer >
          <Stack.Navigator  initialRouteName="Login" screenOptions={{headerShown: false}} topBarOptions={{
          display: 'none'
        }}>
            <Stack.Screen name="Login" >
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
                if (route.name === "AddExpense") {
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-list-box" : "ios-list";
                } else if (route.name === "Overview") {
                  iconName = focused ? "ios-list-box" : "ios-list";
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              height: 150,
              activeTintColor: "#e7e7de",
              inactiveTintColor: "#91918a",
              style: {
                height: 60,
                backgroundColor: "#00587a",
                // paddingBottom: 5,
              },
            }}
          >
            <Tab.Screen name="AddExpense" component={AddExpense} />
            <Tab.Screen name="Overview" component={Overview} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7de",
    alignItems: "center",
    justifyContent: "center",
  },
});
