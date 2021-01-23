// AsyncStorage in React Native to Store Data in Session
// https://aboutreact.com/react-native-asyncstorage/

// import React in our code
import React, { useState } from 'react';

import Button from './Button';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';

// import AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';

var keys = [];

export default function Input() {
  // To get the value from the TextInput
  const [textInputValue, setTextInputValue] = useState('');
  // To set the value on Text
  const [getValue, setGetValue] = useState('');

  const saveValueFunction = () => {
    //function to save the value in AsyncStorage
    if (textInputValue) {
      //To check the input not empty
      AsyncStorage.setItem('any_key_here', textInputValue);

      keys = AsyncStorage.getAllKeys();

      console.log(keys);
      //Setting a data to a AsyncStorage with respect to a key
      setTextInputValue('');
      //Resetting the TextInput
      alert('Data Saved');
      //alert to confirm
    } else {
      alert('Please fill data');
      //alert for the empty InputText
    }
  };

  const getValueFunction = (keys) => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setGetValue(value)
      //Setting the value in Text
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>
          AsyncStorage in React Native to Store Data in Session
        </Text>
        <TextInput
          placeholder="Enter Some Text here"
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
        />
        <Button
          onPress={saveValueFunction}>
          <Text> SAVE VALUE </Text>
        </Button>
        <Button onPress={getValueFunction}>
          <Text> GET VALUE </Text>
        </Button>
        <Text> {getValue} </Text>
      </View>
    </SafeAreaView>
  );
};