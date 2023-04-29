import { Text, View, StyleSheet } from "react-native"
const SignUp = () => {


    return(
        <View style={styles.container}>
            <Text>This is Sign Up Page</Text>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8FF",
        alignItems: "center",
        justifyContent: "center",
    }
    
})