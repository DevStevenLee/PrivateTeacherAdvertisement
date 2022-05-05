

import createDataContext from "./createDataContext";

import api from "../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import asyncHandler from "../module/asyncHandler";
import { navigate } from "../module/navigationRef";

const authReducer = (state, action) => {
    switch(action.type){
        case "restore_token":
            return { ...state, token: action.payload };

        case 'auth_access':
            return { ...state, token: action.payload };
        default :
            return state;
    }
}

const restoreToken = (dispatch) => (token) => {
    dispatch({ type: 'restore_token', payload: token });
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

    await AsyncStorage.setItem('token', res.data.token );
    dispatch({ type: 'auth_access', payload: res.data.token });

    navigate("FindTeachers");
});


const signin = (dispatch) => asyncHandler( async ( props ) => {
    const { email, password } = props;

    const res = await api.post('/auth/signin', { email, password });

    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: 'auth_access', payload: res.data.token });

    navigate('FindTeachers');
});


export const { Provider, Context } = createDataContext(
    authReducer,
    {
        restoreToken,
        hasEmail,
        signup,
        signin
    },
    { token: null, errorMessage: '' }
);