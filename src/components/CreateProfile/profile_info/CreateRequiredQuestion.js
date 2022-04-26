import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";

const CreateRequiredQuestion = ({ question, questionColor }) => {
    return (
        <View style={{ flexDirection: "row", marginBottom: 3 }} >
            <Text style={{ color: "red" }}> * </Text>
            <Text style={{ color: questionColor }}>{ question }</Text>
        </View>
    );
}

export default CreateRequiredQuestion;
