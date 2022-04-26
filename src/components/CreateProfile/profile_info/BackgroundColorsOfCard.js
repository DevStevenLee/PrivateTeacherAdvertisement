import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import CreateRequiredQuestion from "./CreateRequiredQuestion";

import { Context as LocalMyProfileContext } from '../../../context/LocalMyProfileContext';
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";

const BackgroundColorsOfCard = () => {
    const [selectedId, setSelectedId] = useState(null);
    const { state, addMyCardBackgroundColor } = useContext(LocalMyProfileContext);

    const pickedTeacherColor = state.my_profile.cardBackgroundColor;

    const colors = [
        {id: 0, color: "#E2C5D7"},
        {id: 1, color: "#FFF5BE"},
        {id: 2, color: "#F5D8D1"},
        {id: 3, color: "#ECC6BF"},
        {id: 4, color: "#BFFCC6"},
        {id: 5, color: "#FFC9DE"},
        {id: 6, color: "#F3FFE3"},
        {id: 7, color: "#AFCBFF"},
        {id: 8, color: "#C4FAF8"}
    ];

    const Item = ({onPress, backgroundColor, checkIcon}) => (
        <TouchableOpacity
            onPress={ onPress }
            style={[styles.pickCardBackgroundColor, {backgroundColor}]}>
            {checkIcon}
        </TouchableOpacity>
    )

    const renderItem = ({item}) => {
        let backgroundColor = item.color;

        let checkIcon = item.id === selectedId ?
            <AntDesign name={"check"} size={15} color={"#BF00FF"}/> :
            null

        if(item.color === pickedTeacherColor){
            checkIcon = <AntDesign name={"check"} size={15} color={"#BF00FF"}/>
        }

        return (
            <Item
                onPress={() => {
                    setSelectedId(item.id);
                    addMyCardBackgroundColor(item.color);
                }}
                backgroundColor={ backgroundColor }
                checkIcon={ checkIcon }
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CreateRequiredQuestion question="바탕색" questionColor="black"/>
            <KeyboardAwareFlatList
                style={{ alignSelf: "center" }}
                horizontal
                scrollEnabled={false}
                data={ colors }
                keyExtractor={ (item) => item.id }
                renderItem={ renderItem }
                extraData={ selectedId }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    pickCardBackgroundColor: {
        borderColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 40,
        marginHorizontal: 2,
    },
});

export default BackgroundColorsOfCard