import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import NumberInput from "../components/NumberInput"
//TODO
//DON'T DO TAB NAVIGATION
//IT LOOKS BAD WITH BOTTOM NAV

const YearPicker = ({ years, onChangeYear, selectedYear }) => {
  return <Picker
    style={{ height: 50, width: 100 }}
    mode={"dropdown"}
    onValueChange={(itemValue, itemIndex) => onChangeYear(itemIndex)}
    selectedValue={selectedYear}
  >
    {years.map((year) => (
      <Picker.Item label={year} value={year} />
    ))}
  </Picker>;
};

const MonthPicker = ({months, onChangeMonth, selectedMonth}) => {
  return <Picker
    style={{ height: 50, width: 100 }}
    mode={"dropdown"}
    onValueChange={(itemValue, itemIndex) => onChangeMonth(itemIndex)}
    selectedValue={selectedMonth}
  >
    {months.map((month, index) => (
      <Picker.Item label={month} value={index} />
    ))}
  </Picker>;
}

const DaysPicker = ({})=>{
  return <NumberInput/>
}

export default function CalendarTabView({ years }) {
  // 0: recent, 1: month, 2: year
  const [viewMode, setViewMode] = useState(0);

  //0
  const [recentDays, setRecentDays] = useState(30);

  //1
  const [monthYear, setMonthYear] = useState(years[0])
  const [month, setMonth] = useState(month);

  //2
  const [year, setYear] = useState(years[0]);

  return (
    <ScrollView>
      <Picker style={{ height: 50, width: 100 }} mode={"dropdown"}>
        <Picker.Item label="Recent" value={0} />
        <Picker.Item label="Month" value={1} />
        <Picker.Item label="Year" value={2} />
      </Picker>
    </ScrollView>
  );
}
