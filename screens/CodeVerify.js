import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
const CodeVerify = ({ navigation, route }) => {
    const [code, setCode] = useState("");
    //console.log(route);
    const params = route.params;
    return (
        <View style={sytles.container}>
            <Text style={sytles.primaryText}>Enter verification code</Text>
            <Text style={sytles.text}>A code has been sent to +998123456789</Text>
            <TextInput
                style={sytles.textInput}
                onChangeText={setCode}
                placeholder="xxxxxx"
            />
            <Text>Didn't receive a code?</Text>
            <Button
                title="resend"
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <Button
                title="Verify Now"
                onPress={() => {
                    //navigation.navigate("phoneNumberVerify");                    
                    params.confirmCode(params.verificationId, code);
                }}
            />
        </View>
    );
};

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8FF",
        alignItems: "center",
        justifyContent: "center",
    },
    primaryText: {
        fontWeight: "bold",
        fontSize: 18,
        margin: 10
    },
    text: {
        
    },
    textInput: {
        borderBottomWidth: 3,
        borderBottomColor: "#ccc",
    },
});

export default CodeVerify;
