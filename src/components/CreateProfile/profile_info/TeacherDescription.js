import React, {useContext, useState, useEffect} from "react";
import { TextInput } from "react-native";
import { Text } from "@rneui/themed";
import { Context as LocalMyProfileContext } from "../../../context/LocalMyProfileContext";

import colors from "../../../res/colors";

const defaultBackgroundColor = colors.textBoxForProfile.defaultBackgroundColor;
let defaultPlaceholderColor = colors.textBoxForProfile.defaultPlaceholderColor;

const focusedColor = colors.textBoxForProfile.focusedColor;

const TeacherDescription = () => {
    const { state, addMyDescription } = useContext(LocalMyProfileContext);
    const [ description, setDescription ] = useState('');
    const [ placeholderColor, setPlaceHolderColor ] = useState(defaultPlaceholderColor);

    const [questionColor, setQuestionColor] = useState("black");

    const defaultPlaceHolder = (state.my_profile.description === undefined || state.my_profile.description === '')
        ? "내용을 입력해주세요." : state.my_profile.description;

    useEffect(() => {
        if(state.my_profile.description !== undefined)
            setPlaceHolderColor("black");
    }, [])

    return(
        <>
            <Text style={{ color: questionColor, marginBottom: 3 }}>한 줄 소개</Text>
            <TextInput
                placeholder={ defaultPlaceHolder }
                placeholderTextColor={ placeholderColor }
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                maxLength={ 25 }
                style={[styles.teacherDescription, {color: "black"}]}
                onChangeText={(text) => {
                    setDescription(text);
                }}
                onFocus={() => {
                    setQuestionColor(focusedColor);
                    setPlaceHolderColor(colors.textBoxForProfile.defaultPlaceholderColor);
                }}
                onBlur={() => {
                    addMyDescription(description);
                    setQuestionColor("black")
                    setPlaceHolderColor(description.length > 0 ? "black" : colors.textBoxForProfile.defaultPlaceholderColor);
                }}
            />
        </>
    )
}
const styles = {
    teacherDescription: {
        textAlign: 'left',
        paddingStart: 15,
        padding: 3,
        width: "100%",
        height: 'auto',
        backgroundColor: defaultBackgroundColor,
        borderRadius: 20,
    },
}

export default TeacherDescription