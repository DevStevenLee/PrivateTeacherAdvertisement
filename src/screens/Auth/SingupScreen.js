
import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Header from "../../components/Auth/Header";
import SignupForm from "../../components/Auth/SignupForm";
import useValidation from "../../hooks/useValidation";

import { Context as AuthContext } from "../../context/AuthContext";

const SignupScreen = ({ route }) => {
    const { signup } = useContext(AuthContext);

    const [ email, setEmail ] = useState(route.params.email);
    const [ validEmail, setValidEmail ] = useValidation();

    const [ password, setPassword ] = useState('');
    const [ validPassword, setValidPassword ] = useValidation();

    const [ checkPassword, setCheckPassword ] = useState('');
    const [ validCheckPassword, setValidCheckPassword ] = useValidation();

    const emailValidationCallback = () => {
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!regEmail.test(email)) {
            setValidEmail({
                    "errMsg": "이메일 형식을 확인해주세요 ex) xxx@naver.com",
                    "borderColor": "#FF0000"
                }
            );
            return false;
        }
        else {
            setValidEmail({"errMsg": "", "borderColor": "#EBEBEB"});
            return true;
        }
    }

    const passwordValidCallback = () => {
        const regPassword = /^(?:[A-Za-z]+|\d+)*$/;
        if(password.length < 6 || !regPassword.test(password)){
            setValidPassword({
                    "errMsg": "영어, 숫자 포함 6자 이상",
                    "borderColor": "#FF0000"
                }
            );
            return false;
        }
        else {
            setValidPassword({"errMsg": "", "borderColor": "#EBEBEB"});
            return true;
        }
    }

    const checkPasswordValidCallback = () =>{
        if(password !== checkPassword){
            setValidCheckPassword({
                    "errMsg": "비밀번호가 일치하지 않습니다",
                    "borderColor": "#FF0000"
                }
            );
            return false;
        }
        else {
            setValidCheckPassword({"errMsg": "", "borderColor": "#EBEBEB"});
            return true;
        }
    }

    return (
        <View style={ styles.container }>
            <Header />
            <View style={{ width: "100%", flexDirection: "column", marginTop: 25, padding: 10 }}>
                <SignupForm
                    question="이메일"
                    validation={ validEmail }
                    setInputVal={ setEmail }
                    defaultValue={ email }
                    inputTextHolder={ email }
                    isPassword={ false }
                />

                <SignupForm
                    question="비밀번호"
                    validation={ validPassword }
                    setInputVal={ setPassword }
                    defaultValue={ "" }
                    inputTextHolder="비밀번호를 입력해주세요 (영어, 숫자 6자 이상)"
                    isPassword={ true }
                />

                <SignupForm
                    question="비밀번호 재입력"
                    validation={ validCheckPassword }
                    setInputVal={ setCheckPassword }
                    defaultValue={ "" }
                    inputTextHolder="비밀번호를 한번 더 입력해주세요"
                    isPassword={ true }
                />

                <TouchableOpacity
                    style={{ padding: 10, width: "100%", backgroundColor: "#9C27B0", borderRadius: 10, marginTop: 30}}
                    onPress={() => {
                        let valid = emailValidationCallback();
                        valid = passwordValidCallback() && valid;
                        valid = checkPasswordValidCallback() && valid;

                        if(valid){
                            signup({ email, password });
                        }
                    }}
                >
                    <Text style={{ alignSelf: "center", fontSize: 15, color: "white"}}>
                        { "계속하기" }
                    </Text>
                </TouchableOpacity>
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
});

export default SignupScreen;