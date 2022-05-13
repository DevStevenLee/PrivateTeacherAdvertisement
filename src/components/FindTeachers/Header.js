import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Text } from "@rneui/themed";

import { withNavigation } from "../../module/withNavigation";

import Octicons from "react-native-vector-icons/dist/Octicons";
import { Context as LocalMyProfileContext } from "../../context/LocalMyProfileContext";
import useResetUser from "../../hooks/useResetUser";


const Header = ({ navigation }) => {
    const { state } = useContext(LocalMyProfileContext);
    const [ resetUser ] = useResetUser();

    return (
        <SafeAreaView style={{
            alignSelf: "flex-end",
            flexDirection: "row"
        }}>
            <TouchableOpacity
                onPress={() => {
                    resetUser().then('');
                }}>
                <Text style={styles.goToMyProfileText}>
                    로그아웃
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    if (Object.keys(state.my_profile).length === 0) {
                        navigation.push("CreateMyProfileInfo" );
                    } else {
                        navigation.push("ProfileDetailTopTab");
                    }
                }}>
                <Text style={styles.goToMyProfileText}>
                    내 프로필
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.push("TeacherBookmark");
                }}
            >
                <Text>
                    <Octicons
                        name="heart-fill"
                        size={ 20 }
                        color="#E91E63"/>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    goToMyProfileText: {
        color: "black",
        marginRight: 10,
        fontSize: 15,
    }
});

export default withNavigation(Header);