import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { withNavigation } from "../../module/withNavigation";

const Header = ({ navigation }) => {
    return (
        <View style={{
            alignSelf: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "row"}}>

            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text>
                    <Ionicons
                        name="chevron-back-sharp"
                        size={ 25 }
                        color="#000000"/>
                </Text>
            </TouchableOpacity>

        </View>
    );
}

export default withNavigation(Header);