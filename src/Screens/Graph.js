import React, { Component } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import {
  MonthCalendarGraph,
  RecentDaysCalendarGraph,
  YearCalendarGraph,
} from "../components/CalendarGraph";
import { LineGraph } from "../components/LineGraph";
import { Picker } from "@react-native-picker/picker";
export default class Graph extends Component {
  render() {
    return (
      <ScrollView>
        <Picker
          style={{height: 50, width: 100}}
          mode={"dropdown"}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text>This is where a graph goes</Text>
        <LineGraph />
        <MonthCalendarGraph year={2021} month={0} />
        <RecentDaysCalendarGraph days={69} />
        <YearCalendarGraph year={2021} />
      </ScrollView>
    );
  }
}
