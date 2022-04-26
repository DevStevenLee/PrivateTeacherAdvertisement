
import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Auth/Header";
import SigninForm from "../../components/Auth/SigninForm";
import useValidation from "../../hooks/useValidation";
import { Context as AuthContext } from "../../context/AuthContext";

const SigninPasswordScreen = ({ route }) => {
    const { signin } = useContext(AuthContext);

    const [ password, setPassword ] = useState('');
    const [ validation, setValidation ] = useValidation();

    const validationCallback = () => {
        const regPassword = /^(?:[A-Za-z]+|\d+)*$/;
        if(password.length < 6 || !regPassword.test(password)){
            setValidation({
                    "errMsg": "영어, 숫자 포함 6자 이상",
                    "borderColor": "#FF0000"
                }
            );
        } else {
            setValidation({"errMsg": "", "borderColor": "#EBEBEB"});
            const email = route.params.email;
            signin({ email, password })
        }
    }

    return (
        <View style={ styles.container }>
            <Header />
            <View style={{ flex: 1, width: "100%", alignSelf: "center", justifyContent: "center" }}>
                <SigninForm
                    validation={ validation }
                    validationCallback={ validationCallback }
                    setInputVal={ setPassword }
                    inputTextHolder={ "비밀번호를 입력해주세요 (영어, 숫자 6자이상)" }
                    submitText={ "로그인" }
                    isPassword={ true }
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
})

export default SigninPasswordScreen