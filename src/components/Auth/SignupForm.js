
import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

const SignupForm = ({ question, validation, setInputVal, defaultValue, inputTextHolder, isPassword }) => {
    return (
        <>
            <Text style={{ color: "black", fontSize: 15, paddingVertical: 5 }}>
                { question }
            </Text>

            <TextInput
                placeholder={ inputTextHolder }
                placeholderTextColor={ "#C3C3C3" }
                underlineColorAndroid="transparent"
                secureTextEntry={ isPassword }
                defaultValue={ defaultValue }
                autoCapitalize="none"
                maxLength={ 20 }
                style={[ styles.inputBox, { color: "black", borderColor: validation.borderColor }]}
                onChangeText={(text) => setInputVal(text) }
            />

            <Text style={{color: "red", fontSize: 10}}>
                { validation.errMsg }
            </Text>

        </>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        textAlign: 'left',
        padding: 5,
        width: "100%",
        height: 'auto',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        backgroundColor: "#EBEBEB",
    },
})

export default SignupForm;