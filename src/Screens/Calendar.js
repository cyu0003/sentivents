import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import NumberInput from "../components/NumberInput";

const YearPicker = ({ years, onChangeYear, selectedYear }) => {
  return (
    <Picker
      style={{ height: 50, width: 100 }}
      mode={"dropdown"}
      onValueChange={(itemValue, itemIndex) => onChangeYear(parseInt(itemValue))}
      selectedValue={selectedYear.toString()}
    >
      {years.map((year,index) => (
        <Picker.Item label={year.toString()} value={year} key={index}/>
      ))}
    </Picker>
  );
};

const MonthPicker = ({ months = monthsa, onChangeMonth, selectedMonth }) => {
  return (
    <Picker
      style={{ height: 50, width: 100 }}
      mode={"dropdown"}
      onValueChange={(itemValue, itemIndex) => onChangeMonth(itemIndex)}
      selectedValue={selectedMonth}
    >
      {months.map((month, index) => (
        <Picker.Item label={month} value={index} key={index}/>
      ))}
    </Picker>
  );
};

const DaysPicker = ({ defaultValue, onSubmit }) => {
  return <NumberInput defaultValue={defaultValue} onSubmit={onSubmit} />;
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
  setRecentDays,
  recentDays,
  years,
  onSubmit,
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
      return <DaysPicker value={recentDays} setValue={setRecentDays} onSubmit={onSubmit}/>;
    case 1:
      return (
        <>
          <YearPicker years={years} selectedYear={monthYear} onChangeYear={setMonthYear} />
          <MonthPicker selectedMonth={month} onChangeMonth={setMonth} />
        </>
      );
    case 2:
      return <YearPicker years={years} selectedYear={year} onChangeYear={setYear} />;
  }
};



const PICKER_LABELS = ["Recent", "Month", "Year"]
export default function CalendarTabView({ years = yearsa }) {
  // 0: recent, 1: month, 2: year
  const defaultDate = new Date();
  const [viewMode, setViewMode] = useState(0);

  //0 submit is temp/text, submit is used/actual num
  const [recentDays, setRecentDays] = useState(40);
  const [submitDays, setSubmitDays] = useState(recentDays)

  //1
  const [monthYear, setMonthYear] = useState(defaultDate.getFullYear());
  const [month, setMonth] = useState(defaultDate.getMonth());

  //2
  const [year, setYear] = useState(defaultDate.getFullYear());

  return (
    <ScrollView>
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
        recentDays={recentDays}
        setRecentDays={setRecentDays}
        onSubmit={setSubmitDays}
        years={years}
        monthYear={monthYear}
        setMonthYear={setMonthYear}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />

    </ScrollView>
  );
}
