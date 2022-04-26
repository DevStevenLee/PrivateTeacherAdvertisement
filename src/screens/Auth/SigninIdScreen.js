
import React, {useContext, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SigninForm from "../../components/Auth/SigninForm";
import useValidation from "../../hooks/useValidation";

import { Context as AuthContext } from '../../context/AuthContext';

const SigninIdScreen = ({ navigation }) => {
    const { hasEmail } = useContext(AuthContext);

    const [ email, setEmail ] = useState('');
    const [ validation, setValidation ] = useValidation();

    const validationCallback = () => {
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!regEmail.test(email)) {
            setValidation({
                    "errMsg": "이메일 형식을 확인해주세요 ex) xxx@naver.com",
                    "borderColor": "#FF0000"
                }
            );
        } else {
            setValidation({"errMsg": "", "borderColor": "#EBEBEB"});
            hasEmail({ email, navigation })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{color: "black", fontSize: 20}}>
                {"로그인 하시고\n풍성한 혜택을 누리세요 :)"}
            </Text>
            <SigninForm
                validation={ validation }
                validationCallback={ validationCallback }
                setInputVal={ setEmail }
                inputTextHolder={ "이메일 주소를 입력해주세요" }
                submitText={ "계속하기" }
                isPassword={ false }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
})

export default SigninIdScreen