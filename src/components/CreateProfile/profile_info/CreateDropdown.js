import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { View } from "react-native";
import { Text } from "@rneui/base";

import colors from "../../../res/colors";


const CreateDropdown = ({
                                      list,
                                      defaultBackgroundColor,
                                      defaultText,
                                      textColor,
                                      setTextColor,
                                      setQuestionColor,
                                      setSelectedIndex,
                                      listWidth,
                                      callBackToStoreValue
                                  }) => {


    const focusedColor = colors.textBoxForProfile.focusedColor;

    return (
        <ModalDropdown
            options={ list }

            defaultValue={ defaultText }

            style={{
                backgroundColor: defaultBackgroundColor,
                borderRadius: 10,
            }}

            textStyle={{
                color: textColor,
                fontSize: 15,
                paddingStart: 15,
                padding: 8
            }}

            renderRow={(text, index) => {
                if(index > list.size){
                    return null;
                }
                return (
                    <View style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: "white"
                    }}>
                        <Text style={{color: "black", flex: 1}}>
                            {text}
                        </Text>
                    </View>
                )
            }}

            showsVerticalScrollIndicator={ false }
            renderSeparator={() => <View/>}
            adjustFrame={(props) => {
                props.width = listWidth;

                return props;
            }}

            animated={ true }
            saveScrollPosition={ false }

            onSelect={(index) => {
                setTextColor("black");
                callBackToStoreValue(list[index]);

                if(setSelectedIndex !== undefined){
                    setSelectedIndex(index);
                }
            }}

            onDropdownWillShow={() => {
                setQuestionColor( focusedColor )
            }}

            onDropdownWillHide={() => {
                setQuestionColor("black")
            }}
        />
    )
}

export default CreateDropdown;