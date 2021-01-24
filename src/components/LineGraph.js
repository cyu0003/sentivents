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
    return `rgba(255, 255, 255, ${opacity})`;
  },
};

const testDate1 = [3,5,6,1,3,4,7]
const testDate2 = [1,5,4,3,6,7,8]
const testDate3 = [8,6,5,4,3,6,2]
export const LineGraph = ({dataPos=testDate1, dataNeu=testDate2, dataNeg=testDate3}) => {
  const today = new Date()
  today.setDate(today.getDate()-7)
  const dayLabels=[]
  for (let i = 0; i < 7; i++) {
    today.setDate(today.getDate()+1)
    dayLabels.push(`${today.getMonth()+1}/${today.getDate()}`)
  }
  return (
    <View style={{alignItems:"center"}}>
      <LineChart
      // withHorizontalLabels={false}
        data={{
          labels: dayLabels,
          datasets: [
            {
              data: dataPos,
              color:()=>"#24e08cff"
            },
            {
              data: dataNeu,
              color:()=>"#56d3e399"
            },
            {
              data: dataNeg,
              color:()=>"#c9308c"
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
  return <LineGraph/>
  // get data up to the last 12 months
  // add many datasets
}

export const MoodLineChart=({})=>{
  return <LineGraph/>
  // new Date().getMonth
  // get data up to the last 12 months
}