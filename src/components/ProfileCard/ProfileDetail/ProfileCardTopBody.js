
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as LocalMyProfileContext } from "../../../context/LocalMyProfileContext";

const ProfileCardTopBody = () => {
    const { state } = useContext(LocalMyProfileContext);
    const teacher = state.my_profile

    const color = teacher.sex === "남" ? "#03A9F4" : "#E91E63";

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={{fontSize: 20, color: "black"}}>{teacher.name}</Text>
                <Text style={{fontSize: 12, marginLeft: 5, color: color }}>선생님</Text>
            </View>

            <Text style={{fontSize: 12, color: "black"}}>{teacher.description}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        height: "auto",
        width: "100%",
        marginLeft: 10,
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: "flex-end"
    }
});

export default ProfileCardTopBody;