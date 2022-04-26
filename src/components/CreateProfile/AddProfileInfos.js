import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import TeacherPhoto from "./profile_info/TeacherPhoto";
import CreateRequiredQuestion from "./profile_info/CreateRequiredQuestion";
import BackgroundColorsOfCard from "./profile_info/BackgroundColorsOfCard";
import TeacherName from "./profile_info/TeacherName";
import TeacherSex from "./profile_info/TeacherSex";
import TeacherInstrument from "./profile_info/TeacherInstrument";
import TeacherLocation from "./profile_info/TeacherLocation";
import TeacherDescription from "./profile_info/TeacherDescription";
import TeacherContact from "./profile_info/TeacherContact";

import {Context as LocalMyProfileContext} from "../../context/LocalMyProfileContext";

import colors from "../../res/colors";
import {Text} from "@rneui/themed";


const defaultBackgroundColor = colors.textBoxForProfile.defaultBackgroundColor
const defaultPlaceholderColor = colors.textBoxForProfile.defaultPlaceholderColor

// Add header
const AddTeacherNotification = () => {
    return (
        <>
            <Text style={{fontSize: 15}}> 선생님의 프로필을 만들어주세요 :) </Text>
            <Text style={{fontSize: 10, color: "red"}}> *는 필수항목입니다.</Text>
        </>
    );
}

// Add photo
const AddTeacherPhoto = () => {
    return <TeacherPhoto/>
}

// Add background color of card
const AddBackgroundColorsOfCard = () => {
    return <BackgroundColorsOfCard/>
}

// Add Teacher Name
const AddTeacherName = () => {
    return <TeacherName/>
}

// Sex
const ChooseSex = () => {
    const [sexColor, setSexColor] = useState(
        {
            "maleTextColor": defaultPlaceholderColor,
            "maleBackgroundColor": defaultBackgroundColor,
            "femaleTextColor": defaultPlaceholderColor,
            "femaleBackgroundColor": defaultBackgroundColor
        });

    const pickedTextColor = "#FFFFFF";
    const pickedBackgroundColor = "#9C27B0";

    const { state } = useContext(LocalMyProfileContext);

    useEffect(() => {
        if (state.my_profile.sex !== undefined) {

            setSexColor(
                state.my_profile.sex === '남'
                    ? {
                        "maleTextColor": pickedTextColor,
                        "maleBackgroundColor": pickedBackgroundColor,
                        "femaleTextColor": defaultPlaceholderColor,
                        "femaleBackgroundColor": defaultBackgroundColor
                    }
                    : {
                        "maleTextColor": defaultPlaceholderColor,
                        "maleBackgroundColor": defaultBackgroundColor,
                        "femaleTextColor": pickedTextColor,
                        "femaleBackgroundColor": pickedBackgroundColor,
                    })
        }
    }, []);


    return (
        <>
            <CreateRequiredQuestion question="성별" questionColor={"black"}/>

            <View style={{flexDirection: 'row'}}>
                <TeacherSex
                    setSexColor={setSexColor}
                    maleTextColor={ pickedTextColor }
                    maleBackgroundColor={ pickedBackgroundColor }
                    femaleTextColor={defaultPlaceholderColor}
                    femaleBackgroundColor={defaultBackgroundColor}
                    textColor={sexColor.maleTextColor}
                    textBackground={sexColor.maleBackgroundColor}
                    text="남"
                />
                <TeacherSex
                    setSexColor={setSexColor}
                    maleTextColor={defaultPlaceholderColor}
                    maleBackgroundColor={defaultBackgroundColor}
                    femaleTextColor={ pickedTextColor }
                    femaleBackgroundColor={ pickedBackgroundColor }
                    textColor={sexColor.femaleTextColor}
                    textBackground={sexColor.femaleBackgroundColor}
                    text="여"
                />
            </View>
        </>
    )
}

// instrument
const AddTeacherInstrument = () => {
    return <TeacherInstrument/>;
}

// location
const AddTeacherLocation = () => {
    return <TeacherLocation/>
}

// contact
const AddTeacherContact = () => {
    return <TeacherContact/>
}

// description
const AddTeacherDescription = () => {
    return <TeacherDescription/>
}


export {
    AddTeacherNotification,
    AddTeacherPhoto,
    AddBackgroundColorsOfCard,
    AddTeacherName,
    ChooseSex,
    AddTeacherInstrument,
    AddTeacherLocation,
    AddTeacherContact,
    AddTeacherDescription
};