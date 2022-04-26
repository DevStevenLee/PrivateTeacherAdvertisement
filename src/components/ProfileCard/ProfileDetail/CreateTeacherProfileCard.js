import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-paper";
import { withNavigation } from "../../../module/withNavigation";

import { Context as LocalMyProfileContext } from "../../../context/LocalMyProfileContext";

import ProfileCardTopBody from "./ProfileCardTopBody";
import ProfileCardTopDelEdit from "./ProfileCardTopDelEdit";
import ProfileCardBottomBody from "./ProfileCardBottomBody";

const CreateTeacherProfileCard = () => {
    const {state} = useContext(LocalMyProfileContext);

    const teacher = state.my_profile;


    return (
        <View style={{flex: 1, flexDirection: "column"}}>
            <View style={[styles.topCardContainer, { backgroundColor: "white" }]}>
                <Image source={ teacher.photo
                    ? { uri: `data:image/jpeg;base64,${teacher.photo.uri}` }
                    : null } style={styles.photo}/>
                <ProfileCardTopBody />
                <ProfileCardTopDelEdit />
            </View>
            <Divider style={{ height: 1, marginVertical: 5}}/>
            <ProfileCardBottomBody />
            <Divider style={{ height: 2, marginVertical: 5}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    topCardContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        height: "auto",
        width: "100%",
        padding: 10,
        borderRadius: 20,
        overflow: "hidden",
    },

    bottomCardContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        height: "auto",
        width: "100%",
        padding: 10,
        borderRadius: 20,
        overflow: "hidden",
    },

    photo: {
        flex: 1,
        width: 70,
        height: 70,
        borderRadius: 50,
        overflow: "hidden",
    },
});

export default withNavigation(CreateTeacherProfileCard);