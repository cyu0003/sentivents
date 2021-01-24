import React from "react";
import { Text, View, Dimensions } from "react-native";

import {
  LineChart,
  // BarChart,
  // PieChart,
  // ProgressChart,
  // ContributionGraph,
  // StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const lineConfig = {
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

export const LineGraph = ({}) => {
  return (
    <View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              color:()=>"#aeaeff"
            },
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={screenWidth}
        height={220}
        chartConfig={lineConfig}
        bezier
      />
    </View>
  );
};

export const EmojiLineChart=({})=>{
  return <LineChart/>
  // get data up to the last 12 months
  // add many datasets
}

export const MoodLineChart=({})=>{
  return <LineChart/>
  // new Date().getMonth
  // get data up to the last 12 months
}