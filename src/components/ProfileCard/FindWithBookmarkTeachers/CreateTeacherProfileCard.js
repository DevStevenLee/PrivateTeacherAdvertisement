import React from "react";
import { View,  StyleSheet, Image } from "react-native";

import ProfileCardBody from "./ProfileCardBody";
import ProfileCardBookmark from "./ProfileCardBookmark";

const CreateTeacherProfileCard = ({ item }) => {
    const teacher = item;

    return (
        <View style={[styles.container, { backgroundColor: teacher.cardBackgroundColor }]}>
            <Image source={teacher.photo
                ? { uri: `data:image/jpeg;base64,${teacher.photo.uri}` }
                : null } style={styles.photo}/>
            <ProfileCardBody item={ item }/>
            <ProfileCardBookmark item={ item }/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        height: "auto",
        width: "100%",
        borderRadius: 20,
        padding: 10,
        overflow: "hidden",
        marginVertical: 10,
    },
    photo: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden",
    },
});

export default CreateTeacherProfileCard;