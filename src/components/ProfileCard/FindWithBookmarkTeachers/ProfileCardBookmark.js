import React, {useContext, useEffect, useState} from "react";

import { Text, TouchableOpacity } from "react-native";
import Octicons from "react-native-vector-icons/dist/Octicons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {Context as LocalTeachersProfileContext} from "../../../context/LocalTeachersProfileContext";

const ProfileCardBookmark = ({ item }) => {
    const { state, setTeacherBookmark } = useContext(LocalTeachersProfileContext);
    const [ heartName, setHeartName ] = useState("heart");

    const teacher = item;

    useEffect(() => {
        const storeBookmarks = async () => {
            const teacherBookmark = JSON.parse(await AsyncStorage.getItem(`teacher_bookmark_${teacher._id}`));

            if(!teacherBookmark){
                await AsyncStorage.setItem(`teacher_bookmark_${teacher._id}`, JSON.stringify(false));
            }

            setHeartName(teacherBookmark ? "heart-fill" : "heart")
        }

        storeBookmarks().then(r => {});
    }, []);

    useEffect(() => {
        setHeartName(teacher.bookmark ? "heart-fill" : "heart")
    }, [state.teachers[item.index].bookmark])

    return(
        <TouchableOpacity
            onPress={async () => {
                if(heartName === 'heart'){
                    await AsyncStorage.setItem(`teacher_bookmark_${teacher._id}`, JSON.stringify(true))
                    setTeacherBookmark({ index: teacher.index, isBookmarked: true });
                    setHeartName("heart-fill");
                }

                else if(heartName === 'heart-fill') {
                    await AsyncStorage.setItem(`teacher_bookmark_${teacher._id}`, JSON.stringify(false))
                    setTeacherBookmark({ index: teacher.index, isBookmarked: false });
                    setHeartName("heart");
                }
            }}
        >
            <Text>
                <Octicons
                    styles={{ flex: 1 }}
                    name={ heartName }
                    size={ 25 }
                    color="#E91E63"/>
            </Text>
        </TouchableOpacity>
    );
}

export default ProfileCardBookmark;