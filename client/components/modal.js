import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from "react-native";
import DatePicker from "../components/datePicker.js";
import CategoryPicker from "../components/categoryPicker.js";
const App = (props) => {
  console.log('props... in modal ====---->',props.data.item.date)
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setValues] = useState({
    item: props.data.item.item,
    amount: props.data.item.amount,
    date: props.data.item.date,
    category: props.data.item.category,
  });
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} placeholder={props.data.item.item} />
            <TextInput
              style={styles.modalText}
              placeholder={String(props.data.item.amount)}
            />
            <DatePicker  form={form} setValues={setValues}/>
            <CategoryPicker form={form} setValues={setValues}/>
            <View style={{width:'100%',flexDirection:'row',}}>
            <TouchableHighlight
              style={{backgroundColor: "#495464", height:40,width:90,margin:10,justifyContent:'center',alignItems:'center', }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.updateStyle}>Update</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{backgroundColor: "#495464", height:40,width:90,margin:10,justifyContent:'center',alignItems:'center', }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.updateStyle}>Cancel</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Edit</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#f4f4f2",
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical:70,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
    openButton: {

      height:'100%',
      width:73,
      paddingTop:3,
      backgroundColor: "#495464",
      justifyContent:'center',
      alignItems:'center',
    },
  textStyle: {
    fontSize: 15,
    color: "#f4f4f2",
    marginBottom: 5,
    // borderWidth:1,
    // borderColor:'green',
  },
  updateStyle: {
    padding: 5,
    fontSize: 25,
    color: "#f4f4f2",
    // borderWidth: 1,
    // borderColor: "green",
  },
  modalText: {
    width: 240,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#bbbfca",
    paddingLeft: 5,
    color: "#bbbfca",
    backgroundColor: "#e8e8e8",
    fontSize: 23,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    fontFamily: "Helvetica",
  },
});

export default App;
