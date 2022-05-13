import React, {useContext, useEffect, useState} from "react";

import {AsyncStorage, Text} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from "react-native-popup-menu";
import { withNavigation } from "../../../module/withNavigation";

import { Context as LocalMyProfileContext } from "../../../context/LocalMyProfileContext";
import { Context as ServerTeacherProfileContext } from "../../../context/ServerTeacherProfileContext";

const ProfileCardBookmark = ({navigation}) => {
    const { resetMyProfile } = useContext(LocalMyProfileContext);
    const { deleteMyProfile } = useContext(ServerTeacherProfileContext);

    return (
        <MenuProvider
            style={{flexDirection: 'column', alignSelf: "flex-end"}}>
            <Menu>
                <MenuTrigger>
                    <Text>
                        <Entypo
                            name="dots-three-vertical"
                            size={15}
                            color="#505050"/>
                    </Text>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption
                        onSelect={() => {
                            navigation.push("CreateMyProfileInfo")
                        }
                    }>
                        <Text style={{ color: "black"}}>수정하기</Text>
                    </MenuOption>
                    <MenuOption
                        onSelect={async () => {
                            resetMyProfile();
                            deleteMyProfile();
                            navigation.navigate("FindTeachers")
                        }}>
                        <Text style={{ color: "black"}}>삭제하기</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </MenuProvider>
    );
}

export default withNavigation(ProfileCardBookmark);