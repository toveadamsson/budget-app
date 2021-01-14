import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Picker} from '@react-native-picker/picker'
export default function App () {
  const [currency, setCurrency] = useState('EURO €')
  return (
    <View style={styles.container}>
      <Picker
      style={{ height: 100, width: 200, justifyContent:'center',borderWidth:1,
      borderColor: 'red',}}
      itemStyle={{color:'grey'}}
      selectedValue={currency}
      onValueChange={ (itemValue, itemIndex) => setCurrency(itemValue) }>
        <Picker.Item label="Groceries" value="Groceries" />
        <Picker.Item label="Restaurant/Bars" value="Restaurant/Bars" />
        <Picker.Item label="Shopping" value ="Shopping"/>
        <Picker.Item label="Bills" value ="Bills"/>
        <Picker.Item label="Transportation" value ="Transportation"/>
        {/* <Picker.Item label="SGD  S$" value ="SGD S$"/> */}
      </Picker>
    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor: 'yellow',
  },
});