import { View, Text, StyleSheet, Image, Button } from "react-native";
import logo from "././../../../assets/logo.png";
import React from "react";
import Login from "./Login";

const onpressedlogin = () => {
  console.warn("onpressedlogin");
};
const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View>
        <Button title="Login" onPress={() => onpressedlogin()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // backgroundColor: "black",
    alignItems: "center",
  },
  logo: {
    height: "80%",
    width: "80%",
    // justifyContent: "center",
    resizeMode: "contain",
  },
  //   button: {
  //     backgroundColor: "#FEB06A",
  //     color: "black",
  //     padding: 10,
  //     borderRadius: 10,
  //     fontSize: 20,
  //     minwidht: 150,
  //     textAlign: "center",
  //     margin: 10,
  //   },
});

export default Welcome;
