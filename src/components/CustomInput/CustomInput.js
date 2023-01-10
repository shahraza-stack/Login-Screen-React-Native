import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ placeholder, value, setValue, secureTextEntry }) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  input: {
    backgroundColor: "#D9D9D9",
    // borderRadius: 5,
    padding: 15,
    height: 40,
    borderRadius: 5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default CustomInput;
