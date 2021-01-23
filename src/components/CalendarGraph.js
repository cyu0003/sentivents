import React from "react";
import { Text, View, Dimensions } from "react-native";

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
  { date: "2017-01-01", mood: 0 },
  { date: "2017-01-02", mood: 1 },
  { date: "2017-01-04", mood: 3 },
  { date: "2017-01-07", mood: 6 },
  { date: "2017-01-08", mood: 7 },
  { date: "2017-01-09", mood: 8 },
  { date: "2017-01-12", mood: 11 },
  { date: "2017-01-13", mood: 12 },
  { date: "2017-01-14", mood: 13 },
  { date: "2017-01-15", mood: 14 },
  { date: "2017-01-16", mood: 15 },
  { date: "2017-01-17", mood: 16 },
  { date: "2017-01-19", mood: 18 },
  { date: "2017-01-20", mood: 57 },
  { date: "2017-01-21", mood: 20 },
  { date: "2017-01-22", mood: 21 },
  { date: "2017-01-26", mood: 25 },
  { date: "2017-01-27", mood: 26 },
  { date: "2017-01-28", mood: 27 },
  { date: "2017-01-29", mood: 100 },
];

const calendarConfig = {
  color: (opacity = 1) => interpolateColor("2afb53","754af7", opacity),
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
};

const interpolateColor = (c1, c2, ratio) => {
  // min ratio from react-native-chart-kit library
  if (ratio === 0.15) {
    return "#11111111"
  }
  // normalize ratio, since min is 0.2 from react-native-chart-kit
  ratio = (ratio - 0.2)/0.8;

  const hex = function (x) {
    x = x.toString(16);
    return x.length == 1 ? "0" + x : x;
  };

  const r = Math.ceil(
    parseInt(c1.substring(0, 2), 16) * ratio +
      parseInt(c2.substring(0, 2), 16) * (1 - ratio)
  );
  const g = Math.ceil(
    parseInt(c1.substring(2, 4), 16) * ratio +
      parseInt(c2.substring(2, 4), 16) * (1 - ratio)
  );
  const b = Math.ceil(
    parseInt(c1.substring(4, 6), 16) * ratio +
      parseInt(c2.substring(4, 6), 16) * (1 - ratio)
  );
  return `#${hex(r)}${hex(g)}${hex(b)}FF`;
};

const CalendarGraph = ({endDate, numDays}) => {
 
  return (
    <View>
      <ContributionGraph
        values={moodData}
        endDate={endDate}
        numDays={numDays}
        width={screenWidth}
        height={220}
        chartConfig={calendarConfig}
        accessor={"mood"}
        horizontal={false}
        squareSize={42}
      />
    </View>
  );
};

const MonthCalendarGraph = ({year, month}) => {
  const calendarDate = new Date(year, month+1, 0);
  return <CalendarGraph endDate={calendarDate} numDays={calendarDate.getDate()}/>
}

const RecentDaysCalendarGraph = ({days})=>{
  return <CalendarGraph endDate={Date.now()} numDays={days}/>
}

const YearCalendarGraph = ({year})=>{
  let days  = 365;
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    days++;
  }
  return <CalendarGraph endDate={new Date(year, 12, 31)} numDays={days}/>
}

export default {MonthCalendarGraph, RecentDaysCalendarGraph, YearCalendarGraph};
