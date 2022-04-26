import React, { useContext } from "react";

import { Context as LocalMyProfileContext } from "../../../context/LocalMyProfileContext";

import { View } from "react-native";
import CreatePairOfTeacherInfos from "./CreatePairOfTeacherInfos";

const ProfileCardBottomBody = () => {
    const { state } = useContext(LocalMyProfileContext);

    const instrument = state.my_profile.instrument;
    const location = state.my_profile.location.region;
    const contact = state.my_profile.contact;

    return(
        <View style={{ alignSelf: "center"}}>
            <CreatePairOfTeacherInfos firstInfo="악 기" lastInfo={ instrument }/>
            <CreatePairOfTeacherInfos firstInfo="지 역" lastInfo={ location }/>
            { contact !== undefined && contact.address !== undefined  && contact.address !== ''
                ? <CreatePairOfTeacherInfos firstInfo="연 락" lastInfo={ contact.address }/>
                : null}
        </View>
    );
}

export default ProfileCardBottomBody;