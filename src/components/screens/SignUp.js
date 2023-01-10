import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { head1, head2 } from "../../common/formcss";
import CustomInput from "../CustomInput/CustomInput";
import logo from "../../../assets/logo.png";
import CustomButton from "../CustomButton/CustomButton";

const onpressedRegister = () => {
  console.warn("onpressedRegister");
};
const onpressedBackToLogin = () => {
  console.warn("onpressedBackToLogin");
};

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.s1}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.container}>
        <View>
          <Text style={head1}>Create an Account</Text>
          <Text style={head2}>Sign in to continue</Text>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput placeholder="Email" value={email} setValue={setemail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setpassword}
            secureTextEntry={true}
          />
          <CustomInput
            placeholder="RepeatPassword"
            value={passwordRepeat}
            setValue={setpasswordRepeat}
            secureTextEntry={true}
          />
          <CustomButton
            text="Register"
            onPress={onpressedRegister}
            type="PRIMARY"
          />
          <Text>Privacy and Policy</Text>
          <CustomButton
            text="Have an Account? Log in"
            onPress={onpressedBackToLogin}
            type="TERTIARY"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  s1: {
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
    width: "100%",
  },
  s2: {
    display: "flex",
    backgroundColor: "white",
    width: "100%",
    height: "60%",
    // justifyContent: "center",
    // alignItem: "centre",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  logo: {
    height: "40%",
    resizeMode: "contain",
  },
});

export default SignUp;
