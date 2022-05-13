import { useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Context as LocalMyProfileContext } from "../context/LocalMyProfileContext";
import { Context as AuthContext } from "../context/AuthContext";

import { navigate } from "../module/navigationRef";

export default () => {
    const { resetMyProfile } = useContext(LocalMyProfileContext);
    const { resetTokens } = useContext(AuthContext);

    const resetUser = async () => {
        resetMyProfile();
        resetTokens();

        await AsyncStorage.removeItem('access_token');
        await AsyncStorage.removeItem('refresh_token');

        navigate('SigninId');
    }

    return [ resetUser ];
}