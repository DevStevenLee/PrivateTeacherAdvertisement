import React from 'react';
import {View, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../../res/colors";

import {
    AddTeacherNotification,
    AddTeacherPhoto,
    AddBackgroundColorsOfCard,
    AddTeacherName,
    ChooseSex,
    AddTeacherInstrument,
    AddTeacherLocation,
    AddTeacherContact,
    AddTeacherDescription
} from '../../components/CreateProfile/AddProfileInfos';
import Header from "../../components/CreateProfile/Header";

const CreateMyProfileInfoScreen = () => {
    const questionContainerStyle = colors.questionContainerForProfile;


    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={{...questionContainerStyle}}>
                    <Header/>
                </View>

                <View style={{...questionContainerStyle}}>
                    <AddTeacherNotification/>
                </View>

                {/* Photo */}
                <View style={{
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 10,
                }}>
                    <AddTeacherPhoto/>
                </View>

                {/* Background color of card */}
                <View style={{...questionContainerStyle}}>
                    <AddBackgroundColorsOfCard/>
                </View>

                {/* Name */}
                <View style={{...questionContainerStyle}}>
                    <AddTeacherName/>
                </View>

                {/* Sex */}
                <View style={{...questionContainerStyle}}>
                    <ChooseSex/>
                </View>

                {/* Instrument */}
                <View style={{...questionContainerStyle}}>
                    <AddTeacherInstrument/>
                </View>

                {/* Location */}
                <View style={{...questionContainerStyle}}>
                    <AddTeacherLocation/>
                </View>

                {/* Contact */}
                <View style={{...questionContainerStyle}}>
                    <AddTeacherContact/>
                </View>
                
                {/* Description */}
                <View style={{...questionContainerStyle}}>
                    <AddTeacherDescription/>
                </View>

            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "flex-start",
        padding: 12,
        backgroundColor: "white",
    },
});

export default CreateMyProfileInfoScreen;