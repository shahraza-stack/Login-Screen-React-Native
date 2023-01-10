import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.container, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // padding: 15,
    // marginVertical: 5,
    // borderRadius: 5,
    // alignContent: "center",
    // alignItems: "center",
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
  },

  container_TERTIARY: {
    // backgroundColor: "gray",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    // fontWeight: "bold",
    // color: "gray",
  },
  text_PRIMARY: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    fontWeight: "bold",
    color: "gray",
  },
});
export default CustomButton;
