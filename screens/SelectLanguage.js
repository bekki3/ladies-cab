import { Text, View, StyleSheet, Image } from "react-native";
import SelectLanguageButton from "../components/SelectLanguageButton";

const SelectLanguage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../images/logo-white.png")}
            />

            <SelectLanguageButton language="Русский" />
            <SelectLanguageButton language="English" />
            <SelectLanguageButton language="O'zbekcha" />
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
    image: {
        width: "50%",
        height: "40%",
    },
    text: {
        borderWidth: 1,
        borderColor: "green",
    },
});
export default SelectLanguage;
