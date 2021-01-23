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

//https://stackoverflow.com/questions/2483719/get-weeks-in-month-through-javascript
function weekCount(year, month_number) {
  var firstOfMonth = new Date(year, month_number, 1);
  var lastOfMonth = new Date(year, month_number+1, 0);
  var used = firstOfMonth.getDay() + lastOfMonth.getDate();
  return Math.ceil( used / 7);
}

const generateData = (endDate, numDays) => {
  // add a baseline
  const dataList = [{ date: "1900-1-1", mood: 100 }];
  // endDate.setDate(endDate.getDate()+1)
  let currDate = new Date(endDate);
  currDate.setDate(currDate.getDate() - numDays + 2);
  //TODO, there is an off by one error somewehre in the the chart library
  for (let i = 0; i < numDays; i++) {
    dataList.push({
      date: `${currDate.getFullYear()}-${
        currDate.getMonth() + 1
      }-${currDate.getDate()}`,
      mood: Math.random() * 100,
    });
    currDate.setDate(currDate.getDate() + 1);
  }
  // console.log(dataList)
  return dataList;
};

const calendarConfig = {
  color: (opacity = 1) => interpolateColor("2afb53", "754af7", opacity),
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  propsForLabels:{fontWeight:"bold", fontSize:24, fill:"#222222"}
};

const interpolateColor = (c1, c2, ratio) => {
  // min ratio from react-native-chart-kit library
  if (ratio === 0.15) {
    return "#11111111";
  }
  // normalize ratio, since min is 0.2 from react-native-chart-kit
  ratio = (ratio - 0.2) / 0.8;

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

const CalendarGraph = ({ endDate, numDays, height, labels }) => {
  const moodData = generateData(endDate, numDays);
  // endDate.setDate(endDate.getDate()-1)
  return (
    <View>
      <ContributionGraph
        values={moodData}
        endDate={endDate}
        numDays={numDays}
        width={screenWidth}
        height={height || Math.ceil((numDays * 50) / 7 + 50)}
        chartConfig={calendarConfig}
        accessor={"mood"}
        horizontal={false}
        squareSize={42}
        gutterSize={4}
        showMonthLabels={labels}
      />
    </View>
  );
};

export const MonthCalendarGraph = ({ year, month }) => {
  const calendarDate = new Date(year, month + 1, 0);

  return (
    <CalendarGraph endDate={calendarDate} numDays={calendarDate.getDate()} height={weekCount(year, month)*50+20} labels={true}/>
  );
};

export const RecentDaysCalendarGraph = ({ days }) => {
  return <CalendarGraph endDate={new Date()} numDays={days} labels={false}/>;
};

export const YearCalendarGraph = ({ year }) => {
  const months = []
  for (let i = 0; i < 12; i++) {
    months.push(<MonthCalendarGraph year={year} month={i} key={i}/>)
  }
  return months
};
