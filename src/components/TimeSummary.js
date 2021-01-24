import React, { useEffect, useState } from "react";
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
import { MoodLineChart } from "./LineGraph";
import { RecentDaysCalendarGraph } from "./CalendarGraph";
import { getMoodRatio, getEmojiValues } from "../components/Utils";

import * as dbMethods from "../dbMethods";

const data = {
  labels: ["🙁", "😐", "😄"], // optional
  data: [0, 0, 0],
  colors: ["#754af755", "#56d3e399", "#24e08cff"],
  // colors:["#754af7"]
};

const CardContainer = ({ children, style }) => {
  return (
    <View
      style={{
        ...globalStyles.secondary,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

const getData = async (endDate, numDays) => {
  let currDate = endDate;
  currDate.setDate(currDate.getDate() - numDays);

  //result 0 = emojies 1 = confs

  // 1 2 3

  const result = [[], [], [], []];
  let rankObj = {};

  for (let i = 0; i < numDays; i++) {
    currDate.setDate(currDate.getDate() + 1);

    const searchFormat = `${currDate.getFullYear()}-${currDate.getMonth() + 1}-${currDate.getDate()}`;

    let dbObj = await dbMethods.getMessages(searchFormat);
    let posAvg = 0;
    let neuAvg = 0;
    let negAvg = 0;
    dbObj.map((o, index) => {
      [o["emoji1"], o["emoji2"], o["emoji3"], o["emoji4"], o["emoji5"]].map(
        (actualEmoji) => {
          const d = getEmojiValues(actualEmoji);
          posAvg += d[0];
          neuAvg += d[1];
          negAvg += d[2];
          rankObj[actualEmoji] = rankObj[actualEmoji] + 1 || 1;
        }
      );
    });
    if (dbObj.length !== 0) {
      result[0].push(posAvg / dbObj.length);
      result[1].push(neuAvg / dbObj.length);
      result[2].push(negAvg / dbObj.length);
      // dataList.push({date:dateFormatted, mood:(sum/dbObj.length)*100})
    }
  }
  const sortcontainer = [];
  for (const key in rankObj) {
    sortcontainer.push([key, rankObj[key]]);
  }
  sortcontainer.sort(function (a, b) {
    return b[1] - a[1];
  });

  let end = 5;
  if (sortcontainer.length < 5) {
    end = sortcontainer.length;
  }
  // console.log("end + " + end);
  for (let i = 0; i < end; i++) {
    result[3].push(sortcontainer[i][0]);
  }
  // console.log(result);
  return result;
};

const TimeSummary = (
  {
    // emojies = ["😭", "🤡", "😈", "😂", "😀"],
    // confidences = [0.5, 0.8, 0.9, 0.6, 0.2],
  }
) => {
  const [emojies, setEmojies] = useState([]);
  const [sentiments, setSentiments] = useState([[0], [0], [0]]);

  useEffect(() => {
    getData(new Date(), 7).then((result) => {
      // console.log([result[0]/100, result[1]/100, result[2]/100]);
      if (result[0] != undefined && result[1] != undefined && result[2] != undefined) {
        setSentiments([result[0], result[1], result[2]]);
      }
      // setEmojies(["😭", "🤡", "😈", "😂", "😀"]);
      setEmojies(result[3]);
    });
  }, [setEmojies, setSentiments]);

  return (
    <ScrollView>
      <CardContainer>
        <Text
          style={{
            textAlign: "center",
            ...globalStyles.textLabel,
            marginBottom: 8,
          }}
        >
          Sentiment Over Time
        </Text>
        <MoodLineChart
          dataPos={sentiments[0]}
          dataNeu={sentiments[1]}
          dataNeg={sentiments[2]}
        />
      </CardContainer>
      <CardContainer>
        <Text
          style={{
            textAlign: "center",
            ...globalStyles.textLabel,
            marginBottom: 8,
          }}
        >
          Recent Activity
        </Text>
        <RecentDaysCalendarGraph days={7} fill={true} />
      </CardContainer>
      <CardContainer>
        <Text
          style={{
            ...globalStyles.textLabel,
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Your Top Emotions
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 8,

          }}
        >
          {emojies.map((emoji, index) => {
            return (
              <View key={index}>
                <Text style={{ ...globalStyles.textLabel, fontSize: 36 }}>
                  {emoji}
                </Text>
              </View>
            );
          })}
        </View>
      </CardContainer>
    </ScrollView>
  );
};

export default TimeSummary;
