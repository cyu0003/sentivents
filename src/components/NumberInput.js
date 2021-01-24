import React, {useState} from "react";
import { TextInput } from "react-native";

const NumberInput = ({ defaultValue, style, setSubmit }) => {
  const [value, setValue] = useState(defaultValue.toString())
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
      onSubmitEditing={()=>setSubmit(parseInt(value))}
    />
  );
};
export default NumberInput;
