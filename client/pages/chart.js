import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

var obj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
};

export default function App(props) {
  const [value, setValue] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // console.log("props from chart page------->", props);

  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    const temp = { ...obj };
    props.seeAll.forEach((el) => {
      // console.log("el ====>", typeof el.date);
      temp[new Date(el.date).getMonth()] = temp[new Date(el.date).getMonth()] +=
        el.amount;
    });
    setValue(Object.values(temp));
  }, [props.seeAll]);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          // borderColor: "black",
          // borderWidth: 1,
          padding: 0,
          height: "15%",
          paddingVertical:10,
        }}
      >
        <Text
          style={{ fontFamily: "Helvetica", fontSize: 35, textAlign: "center" }}
        >
          Yearly expenses per month
        </Text>
      </View>
      {/* borderWidth:1,borderColor:'red', */}
      <View style={{}}>
        <LineChart
          data={{
            labels: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            datasets: [
              {
                data: value,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={450}
          yAxisSuffix="€"
          yAxisInterval={2} // optional, defaults to 1
          segments={12}
          chartConfig={{
            backgroundGradientFrom: "#bac7a7",
            backgroundGradientTo: "#889e81",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "1",
              stroke: "#889e81",
            },
          }}
          // withVerticalLabels={false}
          // withHorizontalLabelsLabels={false}
          // withInnerLines={false}
          // withOuterLines={false}
          bezier
          style={{
            justifyContent: "flex-end",
            paddingTop: 50,
            borderRadius: 0,
            height: 450,
            // backgroundColor:'red',
     
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

// const chartConfigs = [
//   {
//     backgroundColor: '#000000',
//     backgroundGradientFrom: '#1E2923',
//     backgroundGradientTo: '#08130D',
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#022173',
//     backgroundGradientFrom: '#022173',
//     backgroundGradientTo: '#1b3fa0',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#ffffff',
//     backgroundGradientTo: '#ffffff',
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
//   },
//   {
//     backgroundColor: '#26872a',
//     backgroundGradientFrom: '#43a047',
//     backgroundGradientTo: '#66bb6a',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#000000',
//     backgroundGradientFrom: '#000000',
//     backgroundGradientTo: '#000000',
//     color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
//   }, {
//     backgroundColor: '#0091EA',
//     backgroundGradientFrom: '#0091EA',
//     backgroundGradientTo: '#0091EA',
//     color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
//   },
//   {
//     backgroundColor: '#e26a00',
//     backgroundGradientFrom: '#fb8c00',
//     backgroundGradientTo: '#ffa726',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#b90602',
//     backgroundGradientFrom: '#e53935',
//     backgroundGradientTo: '#ef5350',
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//     style: {
//       borderRadius: 16
//     }
//   },
//   {
//     backgroundColor: '#ff3e03',
//     backgroundGradientFrom: '#ff3e03',
//     backgroundGradientTo: '#ff3e03',
//     color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
//   }
// ]
