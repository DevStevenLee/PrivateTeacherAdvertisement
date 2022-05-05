import React, { useContext, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SigninIdScreen from "./src/screens/Auth/SigninIdScreen";
import SigninPasswordScreen from "./src/screens/Auth/SigninPasswordScreen";
import SignupScreen from "./src/screens/Auth/SingupScreen";
import FindTeachersScreen from "./src/screens/Main/FindTeachersScreen";
import CreateMyProfileInfoScreen from "./src/screens/Main/CreateMyProfileInfoScreen";
import TeacherBookmarkScreen from "./src/screens/Main/TeacherBookmarkScreen";
import ProfileDetailTopTab from "./src/screens/Main/ProfileDetailScreen/ProfileDetailTopTab";

import { Context as AuthContext } from "./src/context/AuthContext";

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocalMyProfileProvider } from './src/context/LocalMyProfileContext';
import { Provider as LocalTeachersProfileProvider } from './src/context/LocalTeachersProfileContext';
import { Provider as ServerTeacherProfileProvider } from './src/context/ServerTeacherProfileContext';

import { navigationRef } from "./src/module/navigationRef";

// Get rid of warning message of console.warning
LogBox.ignoreAllLogs();

const Auth = createNativeStackNavigator();
const AuthStack = () => (
    <Auth.Navigator>
        <Auth.Screen
            name="SigninId"
            component={SigninIdScreen}
            options={{headerShown: false}}
        />
        <Auth.Screen
            name="SigninPassword"
            component={SigninPasswordScreen}
            options={{headerShown: false}}
        />
        <Auth.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
        />
    </Auth.Navigator>
)


const Main = createNativeStackNavigator();
const MainStack = () => (
    <Main.Navigator initialRouteName="FindTeachers">
        <Main.Screen
            name="FindTeachers"
            component={FindTeachersScreen}
            options={{headerShown: false}}
        />
        <Main.Screen
            name="CreateMyProfileInfo"
            component={CreateMyProfileInfoScreen}
            options={{headerShown: false}}
        />
        <Main.Screen
            name="ProfileDetailTopTab"
            component={ProfileDetailTopTab}
            options={{headerShown: false}}
        />
        <Main.Screen
            name="TeacherBookmark"
            component={TeacherBookmarkScreen}
            options={{headerShown: false}}
        />
    </Main.Navigator>
);

const App = () => {
    const { state, restoreToken } = useContext(AuthContext);

    useEffect(() => {
        const getToken = async () => {
            let tok;
            try {
                tok = await AsyncStorage.getItem('access_token');
            } catch (e){
                console.log(e);
            }

            restoreToken(tok);
        };

        getToken().then(r => {});
    }, []);

    return (
        <NavigationContainer res={ navigationRef }>
            {
                (state.accessToken) !== null ? (
                    <MainStack />
                ) : (
                    <AuthStack />
                )
            }
        </NavigationContainer>
    );
};



export default () => {
    return (
        <AuthProvider>
            <LocalMyProfileProvider>
                <LocalTeachersProfileProvider>
                    <ServerTeacherProfileProvider>
                        <App />
                    </ServerTeacherProfileProvider>
                </LocalTeachersProfileProvider>
            </LocalMyProfileProvider>
        </AuthProvider>
    );
}