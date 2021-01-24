import React from "react";
import { Text, View } from "react-native";
import {interpolateColors} from "./Utils"
import {
  // LineChart,
  // BarChart,
  // PieChart,
  // ProgressChart,
  ContributionGraph,
  // StackedBarChart
} from "react-native-chart-kit";

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

  let currDate = new Date(endDate);
  currDate.setDate(currDate.getDate() - numDays + 1);
  //TODO, there is an off by one error somewehre in the the chart library
  for (let i = 0; i < numDays; i++) {
    currDate.setDate(currDate.getDate() + 1);
    dataList.push({
      date: `${currDate.getFullYear()}-${
        currDate.getMonth() + 1
      }-${currDate.getDate()}`,
      mood: Math.random() * 100,
    });
  }
  // console.log(dataList)
  return dataList;
};

const calendarConfig = {
  color: (opacity = 1) => interpolateColors("#2afb53", "#754af7", opacity),
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  propsForLabels:{fontWeight:"bold", fontSize:16, fill:"#222222"}
};

const CalendarGraph = ({ endDate, numDays, height, labels }) => {
  const moodData = generateData(endDate, numDays);
  // const moodData =[]
  // endDate.setDate(endDate.getDate()-1)
  return (
    <View>
      <ContributionGraph
        style={{ alignItems:"center"}}
        values={moodData}
        endDate={endDate}
        numDays={numDays}
        width={380}
        height={height || Math.ceil((numDays * 80.0) / 7 + 50)}
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
    <CalendarGraph endDate={calendarDate} numDays={calendarDate.getDate()} height={weekCount(year, month)*50} labels={true}/>
  );
};

export const RecentDaysCalendarGraph = ({ days }) => {
  return <CalendarGraph endDate={new Date()} numDays={days} labels={true}/>;
};

export const YearCalendarGraph = ({ year }) => {
  const months = []
  for (let i = 0; i < 12; i++) {
    months.push(<MonthCalendarGraph year={year} month={i} key={i}/>)
  }
  return months
};
