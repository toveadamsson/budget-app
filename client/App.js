import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, KeyboardAvoidingView, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
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

  return (
    // <AddExpense />
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <>
      {!isLoggedIn ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>

          <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'AddExpense') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Overview') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>

            <Tab.Screen name="AddExpense" component={AddExpense} />
            <Tab.Screen name="Overview" component={Overview} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
      </>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
