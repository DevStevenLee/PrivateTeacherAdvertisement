
import React, { useContext } from "react";
import {FlatList, View} from "react-native";
import { Context as LocalTeachersProfileContext } from '../../../context/LocalTeachersProfileContext';
import CreateTeacherProfileCard from "./CreateTeacherProfileCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect} from "@types/react";

const TeacherProfileCardList = ({ bookmarkedTeachers }) => {
    const { state } = useContext(LocalTeachersProfileContext);
    const teachers = bookmarkedTeachers ? bookmarkedTeachers : state.teachers;

    return (
        <View style={{ marginVertical: 15}}>
            <FlatList
                style={{ alignSelf: "center", width: "100%"}}
                scrollEnabled={ true }
                data={ teachers }
                keyExtractor={ (item) => item._id }
                renderItem={ ({ item }) => <CreateTeacherProfileCard item={ item } />}
            />
        </View>
    );
};

export default TeacherProfileCardList;