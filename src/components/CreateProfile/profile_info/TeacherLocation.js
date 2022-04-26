import React, {useContext, useEffect, useState} from "react";
import CreateRequiredQuestion from "./CreateRequiredQuestion";
import { View } from "react-native";

import CreateDropdown from "./CreateDropdown";
import {Context as LocalMyProfileContext} from "../../../context/LocalMyProfileContext";
import locations from "../../../res/locations";

import colors from "../../../res/colors";

const defaultBackgroundColor = colors.textBoxForProfile.defaultBackgroundColor;
const defaultPlaceholderColor = colors.textBoxForProfile.defaultPlaceholderColor;

const TeacherLocation = () => {
    const { state, addMyCity, addMyRegion } = useContext(LocalMyProfileContext)

    const [ questionColor, setQuestionColor ] = useState("black");

    const [ citydoTextColor, setCitydoTextColor ] = useState(defaultPlaceholderColor);
    const [ sigusTextColor, setSigusTextColor] = useState(defaultPlaceholderColor);

    const [ parentWidth, setParentWidth ] = useState(0)
    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const onLayout = event => {
        const { width } = event.nativeEvent.layout;
        setParentWidth(width)
    }

    let locationList = Object.keys(locations).map(location => locations[location]);

    let citydos = [];
    locationList.forEach((item) => { citydos.push(item.citydo) })

    let sigus = locationList[selectedIndex].sigu;

    useEffect(() => {
        if(state.my_profile.location !== undefined && state.my_profile.location.city !== undefined){
            setCitydoTextColor("black");
        }

        if(state.my_profile.location !== undefined && state.my_profile.location.region !== undefined){
            setSigusTextColor("black");
        }
    }, []);

    const defaultCityText = (
        state.my_profile.location === undefined
        || state.my_profile.location.city === undefined
        || state.my_profile.location.city === '')
        ? citydos[0] : state.my_profile.location.city;

    const defaultSigusText = (
        state.my_profile.location === undefined
        || state.my_profile.location.region === undefined
        || state.my_profile.location.region === '')
        ? sigus[0] : state.my_profile.location.region;

    return (
        <>
            <CreateRequiredQuestion question="지역" questionColor={ questionColor }/>
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }} onLayout={ onLayout }>
                    <CreateDropdown
                        list={ citydos }
                        defaultBackgroundColor={ defaultBackgroundColor }
                        defaultText={ defaultCityText }
                        textColor={ citydoTextColor }
                        setTextColor={ setCitydoTextColor }
                        setQuestionColor={ setQuestionColor }
                        setSelectedIndex={ setSelectedIndex }
                        listWidth={ parentWidth }
                        callBackToStoreValue={ addMyCity } />
                </View>
                <View style={{ width: "50%" }} onLayout={ onLayout }>
                    <CreateDropdown
                        list={ sigus }
                        defaultBackgroundColor={ defaultBackgroundColor }
                        defaultText={ defaultSigusText }
                        textColor={ sigusTextColor }
                        setTextColor={ setSigusTextColor }
                        setQuestionColor={ setQuestionColor }
                        listWidth={ parentWidth }
                        callBackToStoreValue={ addMyRegion }/>
                </View>
            </View>
        </>
    );
}

export default TeacherLocation;


