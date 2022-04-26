import React, {useContext, useEffect, useState} from "react";
import CreateRequiredQuestion from "./CreateRequiredQuestion";
import { TextInput } from "react-native";

import { Context as LocalMyProfileContext } from '../../../context/LocalMyProfileContext';

import colors from "../../../res/colors";

const defaultBackgroundColor = colors.textBoxForProfile.defaultBackgroundColor;
let defaultPlaceholderColor = colors.textBoxForProfile.defaultPlaceholderColor;

const focusedColor = colors.textBoxForProfile.focusedColor;

const TeacherName = () => {
    const { state, addMyName } = useContext(LocalMyProfileContext);

    const [ name, setName ] = useState('');
    const [ placeholderColor, setPlaceHolderColor ] = useState(defaultPlaceholderColor);

    const [questionColor, setQuestionColor] = useState("black");

    useEffect(() => {
        if(state.my_profile.name !== undefined)
            setPlaceHolderColor("black");
    }, [])

    const defaultPlaceHolder = (state.my_profile.name === undefined || state.my_profile.name === '')
        ? "이름(혹은 닉네임)을 입력해주세요." : state.my_profile.name;

    return (
        <>
            <CreateRequiredQuestion question="이름" questionColor={ questionColor }/>
            <TextInput
                placeholder={ defaultPlaceHolder }
                placeholderTextColor={ placeholderColor }
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                maxLength={10}
                style={[styles.teacherName, {color: "black"}]}
                onChangeText={(text) => {
                    setName(text);
                }}
                onFocus={() => {
                    setQuestionColor(focusedColor)
                    setPlaceHolderColor(colors.textBoxForProfile.defaultPlaceholderColor);
                }}
                onBlur={() => {
                    addMyName(name);
                    setQuestionColor("black");

                    setPlaceHolderColor(name.length > 0 ? "black" : colors.textBoxForProfile.defaultPlaceholderColor);
                }}
            />
        </>
    )
}

const styles = {
    teacherName: {
        textAlign: 'left',
        paddingStart: 15,
        padding: 3,
        width: "100%",
        height: 'auto',
        backgroundColor: defaultBackgroundColor,
        borderRadius: 20,
    },
}

export default TeacherName;