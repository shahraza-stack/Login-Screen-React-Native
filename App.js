import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/components/screens/Home";
import Login from "./src/components/screens/Login";
import Welcome from "./src/components/screens/Welcome";
import Navigation from "./src/components/navigation";
import SignUp from "./src/components/screens/SignUp";

// const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <Home />
    <Login />
    // <SignUp />
    // <Welcome />
    // <NavigationContainer
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    // >
    //   <Stack.Navigator>
    //     <Stack.Screen name="Welcome" component={Welcome} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
