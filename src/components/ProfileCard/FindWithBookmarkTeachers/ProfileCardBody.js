import React, {useContext, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as LocalMyProfileContext } from "../../../context/LocalMyProfileContext";
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";

const ProfileCardBody = ({ item }) => {
    const teacher = item

    const color = teacher.sex === "남" ? "blue" : "red";

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={{fontSize: 20, color: "black"}}>{teacher.name}</Text>
                <Text style={{fontSize: 12, marginLeft: 5, color: color }}>선생님</Text>
            </View>

            <Text style={{fontSize: 12, color: "black"}}>{teacher.description}</Text>

            <View style={styles.rowContainer}>
                <Feather name="music" size={ 10 } color="#505050" style={{ marginRight: 3 }}/>
                <Text style={{ color: "black", fontSize: 10 }}>
                    { teacher.instrument }
                </Text>
            </View>

            <View style={ styles.rowContainer }>
                <Foundation name="map" size={ 10 } color="#505050" style={{ marginRight: 3 }}/>
                <Text style={{ color: "black", fontSize: 10 }}>
                    { teacher.location ? teacher.location.region ? teacher.location.region : null : null }
                </Text>
            </View>

            <View style={styles.rowContainer}>
                <Text style={{fontSize: 12, color: "black"}}>
                    { teacher.contact && teacher.contact.address !== '' ? `contact: ${ teacher.contact.address }` : "" }
                </Text>
            </View>
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

export default ProfileCardBody;