import React from "react";
import { TextInput } from "react-native";

const NumberInput = ({ value, setValue, style, onSubmit }) => {
  return (
    <TextInput
      style={style}
      keyboardType="numeric"
      onChangeText={(text) => {
        text = text.replace(/[^0-9]/g, "");
        text = text.replace(/(^0+)/g, "");
        if (text !== "") {
          let num = parseInt(text);
          if (num < 1 || num > 9999) {
            return;
          }
        }
        setValue(text);
      }}
      value={value}
      // defaultValue={defaultValue.toString()}
      onSubmitEditing={onSubmit(value !== "" ? parseInt(value) : 0)}
    />
  );
};
export default NumberInput;
