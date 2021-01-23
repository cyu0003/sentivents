import React, { useState } from "react";
import { View, TextInput } from "react-native";

const NumberInput = ({ defaultNum, style, onSubmitEditing }) => {
  const [number, setNumber] = useState(defaultNum);
  return (
    <TextInput
      style={style}
      keyboardType="numeric"
      onChangeText={(text) => {
        text.replace(/[^0-9]/g, "");
        setNumber(parseInt(text));
      }}
      value={number}
      onSubmitEditing={onSubmitEditing}
    />
  );
};
