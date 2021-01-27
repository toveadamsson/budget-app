import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Alert, View } from "react-native";
import axios from "axios";
import moment from "moment";
import { SwipeListView } from "react-native-swipe-list-view"; // KOM IHÅG ATT ISTALLERA DESSA TYPER AV PAKET FÖR ATT DE SKALL KUNNA ANVÄNDAS
//?--------------------------------------------
export default function Basic(props) {
  //?--------------------------------------------
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const temp = props.filtered.map((ele, i) => {
      return { key: `${i}`, ...ele };
    });
    setListData(temp);
  }, [props.filtered]);
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  //?--------------------------------------------
  const confirmDelete = (rowMap, data, _id) => {
    Alert.alert(
      "Remove Item",
      "Are you sure?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => deleteRow(rowMap, data.item.key, data.item._id),
        },
      ],
      { cancelable: false }
    );
  };
  //?--------------------------------------------
  const deleteRow = async (rowMap, rowKey, _id) => {
    console.log("*", _id);
    try {
      const response = await axios.delete(
        `http://192.168.1.82:3040/expenses/remove/${_id}`
      );
      if (response.data.ok) {
        const temp = [...props.filtered];
        const index = temp.findIndex((el) => el._id === _id);
        temp.splice(index, 1);
        props.setSeeAll(temp);
        props.setFiltered(temp);
        alert("item deleted");
      } else {
        console.log("sww ======>", response.data);
        alert("something went wrong :(");
      }
      closeRow(rowMap, rowKey);
    } catch (error) {}
  };
  //?--------------------------------------------
  const update = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened ==>", rowKey);
  };

  const renderItem = (data) => (
    <View
      onPress={() => console.log("You touched me")}
      style={styles.rowFront}
      underlayColor={"#f4f4f2"}
    >
      <View style={styles.eachItemContainer}>
        <Text numberOfLines={2} style={styles.text1}>
          {data.item.item}
        </Text>
        <Text style={styles.text2}>{data.item.amount}€</Text>
        <Text style={styles.text3}>{moment(data.item.date).format("l")}</Text>
      </View>
    </View>
  );
  const renderHiddenItem = (data, rowMap, _id) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => confirmDelete(rowMap, data, _id)}
        >
          <Text style={styles.backTextWhite}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        rightOpenValue={-75}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backTextWhite: {
    color: "black",
  },
  eachItemContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    paddingStart: 5,
    fontSize: 22.5,
    color: "black",
    fontFamily: "Helvetica-Light",
    backgroundColor: "#fff",
    width: "45%",
    paddingRight: 5,
  },
  text2: {
    fontSize: 22.5,
    color: "black",
    fontFamily: "Helvetica-Light",
    backgroundColor: "#fff",
    width: "25%",
  },
  text3: {
    fontSize: 22.5,
    color: "black",
    fontFamily: "Helvetica-Light",
    backgroundColor: "#fff",
    width: "30%",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "darkgrey",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 60,
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "red",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});
