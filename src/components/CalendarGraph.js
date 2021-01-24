import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { interpolateColors } from "./Utils";
import { globalStyles } from "../styles/global";
import * as dbMethods from "../dbMethods";
import {
  // LineChart,
  // BarChart,
  // PieChart,
  // ProgressChart,
  ContributionGraph,
  // StackedBarChart
} from "react-native-chart-kit";
import { getMoodRatio } from "../components/Utils";

//https://stackoverflow.com/questions/2483719/get-weeks-in-month-through-javascript
function weekCount(year, month_number) {
  var firstOfMonth = new Date(year, month_number, 1);
  var lastOfMonth = new Date(year, month_number + 1, 0);
  var used = firstOfMonth.getDay() + lastOfMonth.getDate();
  return Math.ceil(used / 7);
}

const generateData = async (endDate, numDays) => {
  // add a baseline
  // let dataList;
  const dataList = []
  // const dataList = [{ date: "1900-1-1", mood: 100 }];

  // dbMethods.getMessages
  let currDate = new Date(endDate);
  currDate.setDate(currDate.getDate() - numDays + 1);
  // //TODO, there is an off by one error somewehre in the the chart library
  for (let i = 0; i < numDays; i++) {
    currDate.setDate(currDate.getDate() + 1);
    let dateFormatted;
    let monthString;
    let dayString;
    const searchFormat = `${currDate.getFullYear()}-${currDate.getMonth()+1}-${currDate.getDate()}`
    if (currDate.getMonth()+1 < 10) {
      monthString = `0${currDate.getMonth() + 1}`;
    }else {
      monthString = `${currDate.getMonth() + 1}`;
    }
    if (currDate.getDate() < 10) {
      dayString = `0${currDate.getDate()}`
    }
    else {
      dayString =`${currDate.getDate()}`
    }

    dateFormatted = `${currDate.getFullYear()}-${monthString}-${dayString}`
    // console.log(dateFormatted)
    let dbObj = await dbMethods.getMessages(
      searchFormat
    );
    // console.log("this is");
    // console.log(dbObj);
    let sum = 0;
    dbObj.map((o) => {
      sum += getMoodRatio(
        [o["emoji1"], o["emoji2"], o["emoji3"], o["emoji4"], o["emoji5"]],
        [o["cv1"], o["cv2"], o["cv3"], o["cv4"], o["cv5"]]
      );
    });
    if (dbObj.length !== 0) {
      dataList.push({date:dateFormatted, mood:(sum/dbObj.length)*100})
    }
  }
  // console.log("datalist ----------------------")
  // console.log(dataList)
  return dataList;
};

const calendarConfig = {
  color: (opacity = 1) =>
    interpolateColors("#2afb53", "#754af7", opacity, 0.15),
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  propsForLabels: {
    fontWeight: "bold",
    fontSize: 16,
    fill: globalStyles.text.color,
  },
};

const CalendarGraph = ({ endDate, numDays, height, labels, fill }) => {
  // let moodData = []
  
  // const moodData = generateData(endDate, numDays);
  const [moodData, setMoodData] = useState([]);

  useEffect(()=>{
    generateData(endDate, numDays).then((result)=>{
      // console.log("gen data then")
      // console.log(result)
      setMoodData(result)
    });
  },[setMoodData])

  // const moodData = [{date:"2021-01-19", mood:24}];
  // endDate.setDate(endDate.getDate()-1)
  return (
    // <View>
    <ContributionGraph
      style={{ alignItems: "center", borderRadius: 60 }}
      values={moodData}
      endDate={endDate}
      numDays={numDays}
      width={380}
      height={height || Math.ceil((numDays * 55.0) / 7 + 50)}
      chartConfig={calendarConfig}
      accessor={"mood"}
      horizontal={false}
      squareSize={42}
      gutterSize={5}
      showMonthLabels={labels}
      showOutOfRangeDays={fill}
      // radius={16}
    />
    // </View>
  );
};

export const MonthCalendarGraph = ({ year, month }) => {
  const calendarDate = new Date(year, month + 1, 0);

  return (
    <CalendarGraph
      endDate={calendarDate}
      numDays={calendarDate.getDate()}
      height={weekCount(year, month) * 50}
      labels={true}
    />
  );
};

export const RecentDaysCalendarGraph = ({ days, fill }) => {
  return (
    <CalendarGraph
      endDate={new Date()}
      numDays={days}
      labels={!fill}
      fill={fill}
    />
  );
};

export const YearCalendarGraph = ({ year }) => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    months.push(<MonthCalendarGraph year={year} month={i} key={i} />);
  }
  return months;
};
