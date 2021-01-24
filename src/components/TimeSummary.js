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
import { Card } from "react-native-paper";
import emojiList from "../../emojiList";
import { globalStyles } from "../styles/global";
import { MoodLineChart} from "./LineGraph"
import {
  RecentDaysCalendarGraph,
} from "./CalendarGraph";


const data = {
  labels: ["🙁", "😐", "😄"], // optional
  data: [0, 0, 0],
  colors: ["#754af755", "#56d3e399", "#24e08cff"],
  // colors:["#754af7"]
};

const CardContainer=({children, style})=>{
  return <View style={{
    ...globalStyles.secondary,
    ...style
  }}>
    {children}
  </View>
}


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
const TimeSummary = ({
  emojies = ["😭", "🤡", "😈", "😂", "😀"],
  confidences = [0.5, 0.8, 0.9, 0.6, 0.2],
  date = new Date(2021, 0, 17),
}) => {
  let totalConf = 0;
  confidences.forEach((c) => (totalConf += c));

  let totalSentiment = 0;

  for (const emoji of emojies) {
    const emojiObj = emojiList.find((item) => item.emoji === emoji);
    if (emojiObj === undefined) {
      continue;
    }
    totalSentiment += emojiObj.negative;
    totalSentiment += emojiObj.neutral;
    totalSentiment += emojiObj.positive;
    data.data[0] += emojiObj.negative;
    data.data[1] += emojiObj.neutral;
    data.data[2] += emojiObj.positive;
  }
  data.data[0] /= totalSentiment;
  data.data[1] /= totalSentiment;
  data.data[2] /= totalSentiment;

  const moodRatio = 0.5 + data.data[2] - data.data[1];

  return (
    <ScrollView>
      <CardContainer>
        <Text
          style={{
            ...globalStyles.textLabel,
            textAlign: "center",
            marginBottom:8
          }}
        >Your Top Emotions</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {emojies.map((emoji, index) => {
            return (
              <View key={index}>
                <Text style={{ ...globalStyles.textLabel, fontSize: 36 }}>
                  {emoji}
                </Text>
                <Text
                  style={{
                    ...globalStyles.textLabel,
                    fontSize: 24,
                    textAlign: "center",
                  }}
                >
                  {Math.floor((confidences[index] * 100) / totalConf)}
                </Text>
              </View>
            );
          })}
        </View>
      </CardContainer>
      <CardContainer>
        <Text
          style={{
            textAlign: "center",
            ...globalStyles.textLabel,
            marginBottom:8
          }}
        >
          Recent Activity
        </Text>
        <RecentDaysCalendarGraph days={7} fill={true}/>
      </CardContainer>
      <CardContainer>
        <Text
          style={{
            textAlign: "center",
            ...globalStyles.textLabel,
            marginBottom:8
          }}
          >
          Sentiment Over Time
        </Text>
          <MoodLineChart/>
      </CardContainer>
    </ScrollView>
  );
};

export default TimeSummary;
