import React, {useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Picker } from "@react-native-picker/picker";
// const RecentTab = ()=>{

// }

// const MonthTab =()=>{

// }

// const YearTab=()=>{

// }

//TODO
//DON'T DO TAB NAVIGATION
//IT LOOKS BAD WITH BOTTOM NAV

export default function CalendarTabView() {
  // 0: recent, 1: month, 2: year
  const [viewMode, setViewMode] = useState(0)
  

  return (
    <ScrollView>
      <Picker
          style={{height: 50, width: 100}}
          mode={"dropdown"}>
          <Picker.Item label="Recent" value={0} />
          <Picker.Item label="Month" value={1} />
          <Picker.Item label="Year" value={2} />
        </Picker>
    </ScrollView>

    
  )
}