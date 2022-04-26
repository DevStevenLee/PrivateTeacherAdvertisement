import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const ProfileDetailWillUpdateScreen = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <Text style={{ color: "#C3C3C3", fontSize: 25}}>
                업데이트가 될 예정입니다 :-)
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})

export default ProfileDetailWillUpdateScreen;