
import React from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SigninForm = ({ validation, validationCallback, setInputVal, inputTextHolder, submitText, isPassword }) => {
    return (
        <>
            <TextInput
                placeholder={ inputTextHolder }
                placeholderTextColor={ "#C3C3C3" }
                underlineColorAndroid="transparent"
                secureTextEntry={ isPassword }
                autoCapitalize="none"
                maxLength={ 20 }
                style={[ styles.inputBox, { color: "black", borderColor: validation.borderColor }]}
                onChangeText={(text) => setInputVal(text.trim()) }
            />

            <Text style={{color: "red", fontSize: 10}}>
                { validation.errMsg }
            </Text>

            <TouchableOpacity
                style={{ padding: 10, width: "100%", backgroundColor: "#9C27B0", borderRadius: 10, marginTop: 10}}
                onPress={() => validationCallback() }
            >
                <Text style={{ alignSelf: "center", fontSize: 15, color: "white"}}>
                    { submitText }
                </Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    inputBox: {
        textAlign: 'left',
        padding: 5,
        marginTop: 50,
        width: "100%",
        height: 'auto',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        backgroundColor: "#EBEBEB",
    },
})

export default SigninForm;