

import createDataContext from "./createDataContext";

import api from "../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import asyncHandler from "../module/asyncHandler";
import { navigate } from "../module/navigationRef";

const authReducer = (state, action) => {
    switch(action.type){
        case 'reset':
            return { accessToken: null, refreshToken: null }

        case "restore_token":
            return { ...state, accessToken: action.payload.accessToken };

        case 'auth_access':
            return { ...state, accessToken: action.payload.accessToken, restoreToken: action.payload.restoreToken };
        default :
            return state;
    }
}

const resetTokens = (dispatch) => () => {
    dispatch({ type: 'reset' });
}

const restoreToken = (dispatch) => (accessToken) => {
    dispatch({ type: 'restore_token', payload: { accessToken: accessToken } });
};

const hasEmail = () => asyncHandler( async ( props ) => {
    const { email, navigation } = props;

    const res = await api.post(`/auth/has/email`, { email });

    if(res.data.data){
        navigation.push("SigninPassword", { email });
    } else {
        navigation.push("Signup", { email });
    }
});

const signup = (dispatch) => asyncHandler( async ( props ) => {
    const { email, password } = props;

    const res = await api.post('/auth/signup', { email, password });

    await AsyncStorage.setItem('access_token', res.data.accessToken );
    await AsyncStorage.setItem('refresh_token', res.data.refreshToken );

    dispatch({ type: 'auth_access', payload: { accessToken: res.data.accessToken,  refreshToken: res.data.refreshToken } });

    navigate("FindTeachers");
});


const signin = (dispatch) => asyncHandler( async ( props ) => {
    const { email, password } = props;

    const res = await api.post('/auth/signin', { email, password });

    await AsyncStorage.setItem('access_token', res.data.accessToken );
    await AsyncStorage.setItem('refresh_token', res.data.refreshToken );

    dispatch({ type: 'auth_access', payload: { accessToken: res.data.accessToken,  refreshToken: res.data.refreshToken } });

    navigate('FindTeachers');
});


export const { Provider, Context } = createDataContext(
    authReducer,
    {
        resetTokens,
        restoreToken,
        hasEmail,
        signup,
        signin
    },
    { accessToken: null, refreshToken: null, errorMessage: '' }
);