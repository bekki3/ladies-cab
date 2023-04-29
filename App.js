import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectLanguage from "./screens/SelectLanguage";
import PhoneNumberVerify from "./screens/PhoneNumberVerify";
import CodeVerify from "./screens/CodeVerify";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
       
            <NavigationContainer>
                <Stack.Navigator initialRouteName="codeVerify" screenOptions={{headerStyle: {backgroundColor: "#F8F8FF"}}}>
                    <Stack.Screen name="selectLanguage" component={SelectLanguage} options={{title: "Select Language"}}/>
                    <Stack.Screen name="phoneNumberVerify" component={PhoneNumberVerify} options={{title: "Login"}} />
                    <Stack.Screen name="codeVerify" component={CodeVerify} options={{title: "Verify Code"}} />
                </Stack.Navigator>
            </NavigationContainer>
    );
}


