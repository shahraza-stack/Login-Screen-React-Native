import {
  Image,
  Button,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { Component, useState } from "react";
import Home from "./Home";
import logo from "../../../assets/logo.png";
import { head1, head2, input } from "../../common/formcss";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";

const onpressedlogin = () => {
  console.warn("onpressedlogin");
};
const onpressedForgotpassword = () => {
  console.warn("onpressedForgotpassword");
};

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.s1}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.container}>
        <View>
          <Text style={head1}>Login</Text>
          <Text style={head2}>Sign in to continue</Text>

          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setpassword}
            secureTextEntry={true}
          />

          <CustomButton text="Login" onPress={onpressedlogin} type="PRIMARY" />
          <CustomButton
            text="Forgot password?"
            onPress={onpressedForgotpassword}
            type="TERTIARY"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };
// export class Login extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }
// }
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
export default Login;
