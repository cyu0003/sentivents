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
import { interpolateColors } from "./Utils";
const roundConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  propsForLabels: {
    ...globalStyles.textLabel,
    fill:globalStyles.textLabel.color
  },
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
  data: [0, 0, 0],
  colors: ["#c9308c", "#56d3e399", "#24e08cff"],
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
const DaySummary = ({
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

  let moodRatio = 0.5 + data.data[2] - data.data[0];
  if (moodRatio > 1) {
    moodRatio = 1;
  }
  else if (moodRatio <0) {
    moodRatio = 0
  }

  return (
    <ScrollView>
      <CardContainer>
        <Text
          style={{
            ...globalStyles.textLabel,
            textAlign: "center",
            marginBottom:8
          }}
        >{`Emotions for ${
          monthNames[date.getMonth()]
        }. ${date.getDate()}, ${date.getFullYear()}`}</Text>
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
            ...globalStyles.textLabel,
            textAlign: "center",
            marginBottom:8
          }}
        >
          Estimated Mood Color
        </Text>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <View style={{ justifyContent: "space-evenly", marginRight: 16 }}>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "#2afb53",
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ ...globalStyles.textLabel, fontSize: 24 }}>
                😄
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "#754af7",
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ ...globalStyles.textLabel, fontSize: 24 }}>
                🙁
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 200,
              width: 200,
              backgroundColor: interpolateColors(
                "#2afb53",
                "#754af7",
                moodRatio
              ),
              borderRadius: 24,
              marginBottom:8,
            }}
          ></View>
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
          Sentiment Breakdown
        </Text>
        <ProgressChart
          chartConfig={roundConfig}
          width={360}
          height={220}
          strokeWidth={20}
          radius={32}
          data={data}
          withCustomBarColorFromData={true}
          // center={[1,2]}
        />
      </CardContainer>
    </ScrollView>
  );
};

export default DaySummary;
