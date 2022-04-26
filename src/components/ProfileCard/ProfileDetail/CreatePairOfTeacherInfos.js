
import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";


const CreatePairOfTeacherInfos = ({ firstInfo, lastInfo }) => {
    return (
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center", marginVertical: 5, marginBottom: 3 }} >
            <Text style={{ color: "black", marginHorizontal: 5 }}>{ firstInfo }</Text>
            <Text style={{ color: "black" }}>{ lastInfo }</Text>
        </View>
    );
}

export default CreatePairOfTeacherInfos;