import { Text, View, StyleSheet, Image } from "react-native";
import SelectLanguageButton from "../components/SelectLanguageButton";
import Logo from "../components/Logo";

const SelectLanguage = () => {
    return (
        <View style={styles.container}>
            <Logo />
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
});
export default SelectLanguage;
