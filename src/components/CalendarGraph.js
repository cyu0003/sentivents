import React from 'react';
import { Text, View, Dimensions } from 'react-native';

import {
  // LineChart,
  // BarChart,
  // PieChart,
  // ProgressChart,
  ContributionGraph,
  // StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const moodData = [
  { date: "2017-01-02", mood: 1 },
  { date: "2017-01-03", mood: 2 },
  { date: "2017-01-04", mood: 3 },
  { date: "2017-01-05", mood: 4 },
  { date: "2017-01-06", mood: 5 },
  { date: "2017-01-30", mood: 2 },
  { date: "2017-01-31", mood: 3 },
  { date: "2017-03-01", mood: 2 },
  { date: "2017-04-02", mood: 4 },
  { date: "2017-03-05", mood: 2 },
  { date: "2017-02-30", mood: 4 }
];

const chartConfig = { 
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
}

const CalendarGraph = () => {
  return (
    <View>
      <ContributionGraph
      values={moodData}
      endDate={new Date("2017-04-01")}
      numDays={60}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor={"mood"}
      />
    </View>
  )
}