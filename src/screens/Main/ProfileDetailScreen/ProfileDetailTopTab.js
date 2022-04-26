import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { View } from "react-native";
import Header from "../../../components/ProfileDetail/Header";
import ProfileDetailScreen from "./ProfileDetailScreen";
import ProfileDetailWillUpdateScreen from "./ProfileDetailWillUpdateScreen";

const Tab = createMaterialTopTabNavigator();

const ProfileDetailTopTab = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "white"}}>

            <View style={{
                paddingHorizontal: 15,
                paddingVertical: 20}}>
                <Header />
            </View>

            <Tab.Navigator>
                <Tab.Screen
                    name="소개"
                    component={ ProfileDetailScreen }
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="준비중"
                    component={ ProfileDetailWillUpdateScreen }
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </View>
    )
}

export default ProfileDetailTopTab;
