import React, {useContext, useEffect, useState} from "react";

import { Context as LocalMyProfileContext } from "../../context/LocalMyProfileContext";
import { Context as ServerTeacherProfileContext } from "../../context/ServerTeacherProfileContext";

import { TouchableOpacity, SafeAreaView } from "react-native";
import { Text } from "@rneui/themed";

import Octicons from "react-native-vector-icons/dist/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { withNavigation } from "../../module/withNavigation";

const TEACHER_PROPS_LENGTH = 9;

const Header = ({ navigation }) => {
    const { state, reset } = useContext(LocalMyProfileContext);
    const { addMyProfileToServer, updateMyProfileFromServer } = useContext(ServerTeacherProfileContext);

    const [checkColor, setCheckColor] = useState('#808080')
    const [areQuestionsFilled, setAreQuestionsFilled] = useState(false);

    const routes = navigation.getState()?.routes;
    const previousRoute = routes[routes.length-2].name

    useEffect(() => {
        const props = Object.getOwnPropertyNames(state.my_profile);

        let isFill = props.length >= TEACHER_PROPS_LENGTH - 3;

        for (let i = 0; i < props.length; i++) {
            let item = props[i];

            if (props.length === TEACHER_PROPS_LENGTH - 3 &&
                ((item === 'location'
                        && (state.my_profile[`${item}`].city === undefined
                        || state.my_profile[`${item}`].region === undefined
                        || state.my_profile[`${item}`].city === ''
                        || state.my_profile[`${item}`].region === '')
                    ) ||
                (item === 'contact' || item === 'description'))) {
                isFill = false;
            }

            else if (item !== 'contact' && item !== 'description' && state.my_profile[`${item}`].length <= 0) {
                isFill = false;
            }
        }

        setCheckColor(isFill ? "#BF00FF" : "#808080");
        setAreQuestionsFilled(isFill);
    }, [state])


    return (
        <SafeAreaView style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 5,
        }}>
            { previousRoute === 'ProfileDetailTopTab'
                ? null
                : <TouchableOpacity
                    onPress={() => {
                        reset();
                        navigation.goBack();
                    }}
                    style={{ flex: 1 }}
                >
                    <Text>
                        <Octicons
                            name="x"
                            size={ 20 }
                            color="#000000"/>
                    </Text>
                </TouchableOpacity>
            }

            <TouchableOpacity
                onPress={() => {
                    if (areQuestionsFilled) {
                        if(previousRoute === 'ProfileDetailTopTab'){
                            updateMyProfileFromServer(state.my_profile)
                        } else if(previousRoute === 'FindTeachers'){

                            addMyProfileToServer(state.my_profile)
                        }

                        navigation.goBack();
                    }
                }}
                activeOpacity={0.7}
            >
                <Text>
                    <Ionicons
                        name="checkmark-sharp"
                        size={ 20 }
                        color={checkColor}
                        style={{ textAlign: "center" }}
                    />
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default withNavigation(Header);