import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const About = () =>{
    return (
        <View>
            <Text>About the app Page</Text>
        </View>
    )
}

export default About


const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#fff",
      borderColor: "blue",
      borderWidth: 10,
      width: "100%",
    },
})