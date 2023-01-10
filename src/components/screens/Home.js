import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const onpressedLogOut = () => {
  console.warn("onpressedForgotpassword");
};
const Home = ({ navigation }) => {
  return <CustomButton text="LogOut" onPress={onpressedLogOut} />;
};

export default Home;
