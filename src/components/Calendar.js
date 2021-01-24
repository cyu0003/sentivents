import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import NumberInput from "./NumberInput";
import {
  MonthCalendarGraph,
  RecentDaysCalendarGraph,
  YearCalendarGraph,
} from "./CalendarGraph";

const YearPicker = ({ years, onChangeYear, selectedYear }) => {
  return (
    <Picker
      style={{ height: 50, width: 150 }}
      mode={"dropdown"}
      onValueChange={(itemValue, itemIndex) =>
        onChangeYear(parseInt(itemValue))
      }
      selectedValue={selectedYear}
    >
      {years.map((year, index) => (
        <Picker.Item label={year.toString()} value={year} key={index} />
      ))}
    </Picker>
  );
};

const MonthPicker = ({ months = monthsa, onChangeMonth, selectedMonth }) => {
  return (
    <Picker
      style={{ height: 50, width: 150 }}
      mode={"dropdown"}
      onValueChange={(itemValue, itemIndex) => onChangeMonth(itemIndex)}
      selectedValue={selectedMonth}
    >
      {months.map((month, index) => (
        <Picker.Item label={month} value={index} key={index} />
      ))}
    </Picker>
  );
};

const yearsa = [2019, 2020, 2021];
const monthsa = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SecondPicker = ({
  viewMode,
  defaultDays,
  years,
  setSubmit,
  ////////////
  monthYear,
  setMonthYear,
  month,
  setMonth,
  /////////
  year,
  setYear,
}) => {
  switch (viewMode) {
    case 0:
      return (
        <NumberInput
          defaultValue={defaultDays}
          setSubmit={setSubmit}
        />
      );
    case 1:
      return (
        <>
          <YearPicker
            years={years}
            selectedYear={monthYear}
            onChangeYear={setMonthYear}
          />
          <MonthPicker selectedMonth={month} onChangeMonth={setMonth} />
        </>
      );
    case 2:
      return (
        <YearPicker years={years} selectedYear={year} onChangeYear={setYear} />
      );
  }
};

const SelectedCalendar = ({
  viewMode,
  recentDays,
  monthYear,
  month,
  year,
}) => {
  switch (viewMode) {
    case 0:
      return <RecentDaysCalendarGraph days={recentDays} />;
    case 1:
      return <MonthCalendarGraph year={monthYear} month={month} />;
    case 2:
      return <YearCalendarGraph year={year} />;
  }
};

const PICKER_LABELS = ["Recent", "Month", "Year"];
export default function CalendarTabView({ years = yearsa }) {
  // 0: recent, 1: month, 2: year
  const defaultDate = new Date();
  const [viewMode, setViewMode] = useState(0);

  //0 submit is temp/text, submit is used/actual num
  const [recentDays, setRecentDays] = useState(40);

  //1
  const [monthYear, setMonthYear] = useState(defaultDate.getFullYear());
  const [month, setMonth] = useState(defaultDate.getMonth());

  //2
  const [year, setYear] = useState(defaultDate.getFullYear());

  return (
    <View>
      <Picker
        style={{ height: 50, width: 200 }}
        mode={"dropdown"}
        onValueChange={(itemValue, itemIndex) => setViewMode(itemValue)}
        selectedValue={viewMode}
      >
        <Picker.Item label={PICKER_LABELS[0]} value={0} />
        <Picker.Item label={PICKER_LABELS[1]} value={1} />
        <Picker.Item label={PICKER_LABELS[2]} value={2} />
      </Picker>
      <SecondPicker
        viewMode={viewMode}
        defaultDays={recentDays}
        setSubmit={setRecentDays}
        years={years}
        monthYear={monthYear}
        setMonthYear={setMonthYear}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
      <ScrollView>
        <SelectedCalendar
          viewMode={viewMode}
          recentDays={recentDays}
          monthYear={monthYear}
          month={month}
          year={year}
        />
      </ScrollView>
    </View>
  );
}
