import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const roundConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => {
    // console.log(opacity);
    // if (opacity===0.2) {
    //   return "#ae3edd"
    // }
    return `rgba(0, 0, 0, ${opacity})`;
  },
};

const data = {
  labels: ["🙁", "😐", "😄"], // optional
  data: [0.4, 0.6, 0.89],
  colors: ["#754af755", "#56d3e399", "#24e08cff"],
  // colors:["#754af7"]
};

const screenWidth = Dimensions.get("window").width;

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dev",
];
const DaySummary = ({
  emojies = ["😭", "🤡", "😈", "😂", "😀"],
  date = new Date(2021, 0, 17),
}) => {
  return (
    <ScrollView>
      <Text
      style={{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold"

      }}>{`Top Emotions for ${
        monthNames[date.getMonth()]
      }. ${date.getDate()}, ${date.getFullYear()}`}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {emojies.map((emoji, index) => (
          <Text style={{ fontSize: 48 }} key={index}>
            {emoji}
          </Text>
        ))}
      </View>
      <Text style={{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold"
      }}>
        Sentiment Breakdown
      </Text>
      <ProgressChart
        chartConfig={roundConfig}
        width={screenWidth}
        height={220}
        strokeWidth={20}
        radius={32}
        data={data}
        withCustomBarColorFromData={true}
        // center={[1,2]}
      />
    </ScrollView>
  );
};

export default DaySummary;
