import React, {useContext, useEffect, useState} from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import RNFetchSys from 'react-native-fs';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../../../res/colors";

import { Context as LocalMyProfileContext } from "../../../context/LocalMyProfileContext";
import ImageResizer from "react-native-image-resizer";

const defaultBackgroundColor = colors.textBoxForProfile.defaultBackgroundColor

const TeacherPhoto = () => {
    const { state, addMyPhoto } = useContext(LocalMyProfileContext)

    const pickedTeacherPhoto = state.my_profile.photo;

    const resultOfAccessPhoto = async () => {
        await launchImageLibrary( null, (response) => {

            if(response.assets){
                response.assets.find(async (photo) => {

                    const resizedPhoto = await ImageResizer.createResizedImage(
                        photo.uri,
                        500,
                        500,
                        'JPEG',
                        100
                    );

                    RNFetchSys.readFile(resizedPhoto.uri, 'base64').then(
                        photoBase64 => {
                            resizedPhoto[`uri`] = photoBase64;
                            resizedPhoto['type'] = photo.type;

                            addMyPhoto({ photo : resizedPhoto });
                        }
                    )
                });
            }
        });
    }

    return (
        <TouchableOpacity
            style={ styles.container }
            onPress={ resultOfAccessPhoto }
        >
            { pickedTeacherPhoto === undefined
                ? <MaterialIcons name={ "add-a-photo" } size={ 30 } color="#808080"/>
                : <Image source={{ uri: `data:image/jpeg;base64,${pickedTeacherPhoto.uri}` }} style={ styles.teacherPhoto }/>
            }

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: defaultBackgroundColor,
        borderRadius: 50,
    },

    teacherPhoto: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
        overflow: "hidden",
    }
});

export default TeacherPhoto;