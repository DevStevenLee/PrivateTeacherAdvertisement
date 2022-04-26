
import React from 'react';
import { View } from 'react-native';
import CreateTeacherProfileCard from "../../../components/ProfileCard/ProfileDetail/CreateTeacherProfileCard";

const ProfileDetailScreen = () => {
    return (
        <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 20}}>
            <View style={{ height: "30%", width: "100%"}}>
                <CreateTeacherProfileCard />
            </View>
        </View>
    );
}



export default ProfileDetailScreen;