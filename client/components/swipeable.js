//===========================================================
//================  swipeable.js  ====================
//===========================================================
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view'; // KOM IHÅG ATT ISTALLERA DESSA TYPER AV PAKET FÖR ATT DE SKALL KUNNA ANVÄNDAS
export default function Basic() {
    const [listData, setListData] = useState(
        Array(2)
            .fill('')
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    );
    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };
    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };
    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };
    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}
        >
            <View>
                <Text style={styles.text}>I am {data.item.text} in a SwipeListView</Text>
            </View>
        </TouchableHighlight>
    );
    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Remove</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={0}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
    
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e7e7de",
        flex: 1,
        width: '100%',
    },
    backTextWhite: {
        color: '#e7e7de',
   
    },
    text:{
        color:'#0f3057',  
        backgroundColor: "#e0e0d3",
        height:"100%",
        width:370,
        paddingTop:25,
        paddingLeft: 5,
     
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: "#e0e0d3",
        // marginBottom:4,
        borderColor: "#00587a",
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 60,
        
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: '#0f3057',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#ef4f4f',
        right: 0,
    },
});

















