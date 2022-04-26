import React, { useContext, useState, useEffect } from "react";
import CreateRequiredQuestion from "./CreateRequiredQuestion";
import { View } from "react-native";

import CreateDropdown from "./CreateDropdown";
import {Context as LocalMyProfileContext} from "../../../context/LocalMyProfileContext";

import colors from "../../../res/colors";
import instruments from "../../../res/instrument";

const defaultBackgroundColor = colors.textBoxForProfile.defaultBackgroundColor;
const defaultPlaceholderColor = colors.textBoxForProfile.defaultPlaceholderColor;

const TeacherInstrument = () => {

    const { state, addMyInstrument } = useContext(LocalMyProfileContext);

    const [questionColor, setQuestionColor] = useState("black");
    const [textColor, setTextColor] = useState(defaultPlaceholderColor);
    const [parentWidth, setParentWidth] = useState(0);

    const onLayout = event => {
        const { width } = event.nativeEvent.layout;
        setParentWidth(width)
    }

    useEffect(() => {
        if(state.my_profile.instrument !== undefined)
            setTextColor("black");
    }, [])

    const defaultText = (state.my_profile.instrument === undefined)
        ? "악기를 선택해주세요." : state.my_profile.instrument;

    return (
        <View style={{width: "100%"}} onLayout={ onLayout }>
            <CreateRequiredQuestion question="악기" questionColor={ questionColor }/>
            <CreateDropdown
                list={ instruments }
                defaultBackgroundColor={ defaultBackgroundColor }
                defaultText={ defaultText }
                textColor={ textColor }
                setTextColor={ setTextColor }
                setQuestionColor={ setQuestionColor }
                listWidth={ parentWidth }
                callBackToStoreValue={ addMyInstrument }
            />
        </View>
    );
}

export default TeacherInstrument;