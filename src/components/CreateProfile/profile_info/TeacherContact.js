import React, { useContext, useEffect, useState} from "react";
import { TextInput,  Text, View, StyleSheet } from "react-native";

import { Context as LocalMyProfileContext } from "../../../context/LocalMyProfileContext";

import Feather from "react-native-vector-icons/Feather";

import colors from "../../../res/colors";

const defaultBackgroundColor = colors.textBoxForProfile.defaultBackgroundColor;
const defaultPlaceholderColor = colors.textBoxForProfile.defaultPlaceholderColor;

const TeacherContact = () => {
    const { state, addMyContact } = useContext(LocalMyProfileContext);
    const [ contact, setContact ] = useState('');
    const [ placeholderColor, setPlaceHolderColor ] = useState(defaultPlaceholderColor);

    const defaultPlaceHolder = (
        state.my_profile.contact === undefined
        || state.my_profile.contact.address === undefined
        || state.my_profile.contact.address === '') ? "내용을 입력해주세요." : state.my_profile.contact.address;

    useEffect(() => {
        if(state.my_profile.contact !== undefined && state.my_profile.contact.address !== undefined)
            setPlaceHolderColor("black");
    }, [])

    return (
        <>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
                <Feather name="plus" size={15} color="#505050" style={{marginRight: 3}}/>
                <Text style={{
                    color: colors.textBoxForProfile.defaultPlaceholderColor,
                    fontSize: 15
                }}>
                    정보를 추가하세요
                </Text>
            </View>

            <View style={{
                paddingVertical: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white"
            }}>
                <TextInput
                    placeholder={ defaultPlaceHolder }
                    placeholderTextColor={ placeholderColor }
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    maxLength={ 25 }
                    onChangeText={( t ) => {
                        setContact(t);
                    }}
                    style={[styles.teacherContactInput, {color: "black"}]}
                    onFocus={() => {
                        setPlaceHolderColor(colors.textBoxForProfile.defaultPlaceholderColor);
                    }}
                    onBlur={() => {
                        addMyContact(contact);
                        setPlaceHolderColor(contact.length > 0 ? "black" : colors.textBoxForProfile.defaultPlaceholderColor);

                    }}

                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    teacherContactIcon: {
        padding: 5,
        height: 'auto',
        marginRight: 3,
        textAlign: "center",
        backgroundColor: defaultBackgroundColor,
        borderRadius: 5,
    },

    teacherContactInput: {
        textAlign: 'left',
        paddingStart: 15,
        padding: 3,
        flex: 1,
        width: "100%",
        height: 'auto',
        backgroundColor: defaultBackgroundColor,
        borderRadius: 20,
    },

    app: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c2ffd2',
    },

    teacherIconsPopoverContent: {
        padding: 16,
        backgroundColor: 'pink',
        borderRadius: 8,
    },

    teacherIconsPopoverArrow: {
        borderTopColor: 'pink',
    },

    teacherIconsPopoverBackground: {
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
    }
})

export default TeacherContact;