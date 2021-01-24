import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Dimensions } from "react-native";
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
  colors:["#754af7","#56d3e3", "#2afb53"]
};

const screenWidth = Dimensions.get("window").width;

const DaySummary = ({}) => {
  return (
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
  );
};

export default DaySummary;
