
import React, {useContext, useEffect, useState} from 'react';

import {
    View,
    StyleSheet,
    SafeAreaView,
    Text
} from 'react-native';

import Header from "../../components/Bookmark/Header";

import { Context as LocalTeachersProfileContext } from "../../context/LocalTeachersProfileContext";
import { Context as LocalMyProfileContext } from "../../context/LocalMyProfileContext";
import TeacherProfileCardList from "../../components/ProfileCard/FindWithBookmarkTeachers/TeacherProfileCardList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TeacherBookmarkScreen = () => {
    const { state: { teachers } } = useContext(LocalTeachersProfileContext);
    const { state } = useContext(LocalMyProfileContext);

    const [ bookmarkedTeachers, setBookmarkedTeachers ] = useState([]);

    let bufBookmarkedTeachers = [];

    useEffect(() => {
        const getBookmarkedTeachers = async () => {
            for await (const teacher of teachers){
                const isBookmarked = JSON.parse(await AsyncStorage.getItem(`teacher_bookmark_${teacher._id}`))

                if(isBookmarked){
                    bufBookmarkedTeachers.push(teacher);

                }
            }
        }

        getBookmarkedTeachers().then(r => {
            setBookmarkedTeachers(bufBookmarkedTeachers)
        });
    }, []);

    const name = state.my_profile.name ? state.my_profile.name : "OOO";
    const headerText = `${name}님께서\n하트를 누른 선생님만 모았어요 :)`

    return (
        <SafeAreaView style={ styles.container }>
            <Header />
            <Text style={{ color: "black", fontSize: 20, marginTop: 10 }}>{ headerText }</Text>
            {bookmarkedTeachers.length > 0 ?
                <View>
                    <TeacherProfileCardList bookmarkedTeachers={bookmarkedTeachers}/>
                </View>
                : <View style={{flex: 1, alignSelf: "center", justifyContent: "center"}}>
                    <Text style={{color: "#C3C3C3", alignSelf: "center", flexWrap: "wrap", fontSize: 25}}>
                        하트를 누른 선생님이 없어요 ;O;
                    </Text>
                </View>
            }
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 15,
        paddingVertical: 20,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    }
})

export default TeacherBookmarkScreen;