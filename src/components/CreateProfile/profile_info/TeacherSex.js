import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import {Context as LocalMyProfileContext} from "../../../context/LocalMyProfileContext";

const TeacherSex = ({
                        setSexColor,
                        maleTextColor,
                        maleBackgroundColor,
                        femaleTextColor,
                        femaleBackgroundColor,
                        textColor,
                        textBackground,
                        text
                    }) => {

    const { addMySex } = useContext(LocalMyProfileContext);

    return (
        <TouchableOpacity
            activeOpacity={ 1 }
            onPress={() => {
                setSexColor({
                    maleTextColor,
                    maleBackgroundColor,
                    femaleTextColor,
                    femaleBackgroundColor
                });

                addMySex(text);
            }}
            style={{ width: "50%" }}
        >
            <Text style={{
                paddingStart: 15,
                padding: 3,
                width: "100%",
                height: 'auto',
                color: textColor,
                backgroundColor: textBackground,
                borderRadius: 20
            }}>
                { text }
            </Text>
        </TouchableOpacity>

    )
}

export default TeacherSex;