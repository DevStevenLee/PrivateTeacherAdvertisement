
import React, { useContext } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Text } from "@rneui/themed";

import Ionicons from "react-native-vector-icons/Ionicons";

import { withNavigation } from "../../module/withNavigation";


const Header = ({ navigation }) => {

    return (
        <View style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{ flex: 1 }}
            >
                <Text>
                    <Ionicons
                        name="chevron-back-sharp"
                        size={ 25 }
                        color="#000000"/>
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default withNavigation(Header);