import React, {useContext, useEffect, useState} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity, View,
} from 'react-native';

import {
    Text
} from "@rneui/themed";

import { Context as LocalMyProfileContext } from '../../context/LocalMyProfileContext'
import { Context as LocalTeacherProfileContext } from '../../context/LocalTeachersProfileContext'
import { Context as ServerTeacherProfileContext } from '../../context/ServerTeacherProfileContext';

import Header from "../../components/FindTeachers/Header";
import TeacherProfileCardList from "../../components/ProfileCard/FindWithBookmarkTeachers/TeacherProfileCardList";

const FindTeachersScreen = () => {
    const [ isTeachersFetch, setIsTeachersFetch ] = useState(false);
    const { setTeachersProfileFromServer } = useContext(LocalTeacherProfileContext)

    const [ isMyFetch, setIsMyFetch ] = useState(false);
    const { setMyProfileFromServer } = useContext(LocalMyProfileContext);

    const { getTeachersProfileFromServer, getMyProfileFromServer } = useContext(ServerTeacherProfileContext);
    useEffect(() => {
        getTeachersProfileFromServer({ setTeachersProfileFromServer, setIsTeachersFetch });
        getMyProfileFromServer({ setMyProfileFromServer, setIsMyFetch });
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            { isTeachersFetch && isMyFetch
                ? <>
                    <Header/>
                    <Text h2 h2Style={{marginTop: 10}}>선생님 찾기</Text>
                    <View style={{ flex: 1, width: "100%" }}>
                        <TeacherProfileCardList />
                    </View>
                </>
                : null }
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 14,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
})

export default FindTeachersScreen;