import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import Logo from "../components/Logo";
const PhoneNumberVerify = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    let phoneNumberLength;
    const onChangeTextHandler = (text) => {
        //console.log(text.replace(/[^\d]/g, ""));
        const phoneNumber = text.replace(/[^\d]/g, "");
        phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 3) {
            setPhoneNumber(phoneNumber);
        } else if (phoneNumberLength < 6) {
            setPhoneNumber(
                `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
            );
        } else if (phoneNumberLength < 8) {
            setPhoneNumber(
                `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
                    2,
                    5
                )}-${phoneNumber.slice(5, 7)}`
            );
        } else {
            setPhoneNumber(
                `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
                    2,
                    5
                )}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`
            );
        }
    };
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={{ margin: 6 }}>Login with your phone number</Text>
            <View style={styles.phoneInputContainer}>
                <Text style={styles.phoneInputText}>+998</Text>
                <TextInput
                    onChangeText={onChangeTextHandler}
                    keyboardType="phone-pad"
                    style={styles.phoneInput}
                    placeholder="(xx) xxx-xx-xx"
                    value={phoneNumber}
                    maxLength={14}
                />
            </View>

            <Pressable
                onPress={()=>{console.log("Number sent")}}
                style={[
                    styles.sendCodeButton,
                    {
                        backgroundColor:
                            phoneNumber.length < 14 ? "#CCCCCC" : "#DC37AD",
                    },
                ]}
            >
                <Text style={styles.sendCodeText}>Send code</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8FF",
        alignItems: "center",
        justifyContent: "center",
    },
    phoneInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 50,
        paddingHorizontal: 12,
        width: "80%",
    },
    phoneInputText: {
        fontSize: 16,
    },
    phoneInput: {
        height: 50,
        paddingHorizontal: 4,
        fontSize: 16,
    },
    sendCodeButton: {
        justifyContent: "center",

        borderRadius: 50,
        width: "80%",
        height: 46,
        margin: 10,
    },
    sendCodeText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
    },
});
export default PhoneNumberVerify;
