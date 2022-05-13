import createDataContext from "./createDataContext";

import api from "../api/axios";
import asyncHandler from "../module/asyncHandler";

const teacherProfileReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const getTeachersProfileFromServer = () => asyncHandler( async ( props ) => {
    const { setTeachersProfileFromServer, setIsTeachersFetch } = props;

    const res = await api.get('/profiles/teachers');
    const teachers = res.data.data;

    if(teachers.length >= 0){
        setTeachersProfileFromServer(teachers);
    }

    setIsTeachersFetch(true);
})

const getMyProfileFromServer = () => asyncHandler(async ( props ) => {
    const { setMyProfileFromServer, setIsMyFetch } = props;

    const res = await api.get('/profiles/me');
    const myProfile = res.data.data;


    if(myProfile){
        setMyProfileFromServer(myProfile);
    }

    setIsMyFetch(true);
});

const addMyProfileToServer = () => asyncHandler(async (props) => {
    const {
        photo,
        cardBackgroundColor,
        name,
        sex,
        instrument,
        location,
        contact,
        description,
        bookmark
    } = props;

    await api.post(
        '/profiles/me',
        {
            cardBackgroundColor,
            name,
            sex,
            instrument,
            location,
            contact,
            description,
            bookmark
        });

    await api.put(
        '/profiles/upload/my/photo',
        {
            photo: { photo }
        }
    );
});

const updateMyProfileFromServer = () => asyncHandler( async ( props ) => {
    const {
        photo,
        cardBackgroundColor,
        name,
        sex,
        instrument,
        location,
        contact,
        description,
        bookmark
    } = props;

    await api.put(
        '/profiles/me',
        {
            cardBackgroundColor,
            name,
            sex,
            instrument,
            location,
            contact,
            description,
            bookmark
        });

    await api.put(
        '/profiles/upload/my/photo',
        {
            photo: { photo }
        }
    );
});

const deleteMyProfile = (dispatch) => asyncHandler( async () => {
    await api.delete('/profiles/me');
});

export const { Context, Provider } = createDataContext(
    teacherProfileReducer,
    {
        getTeachersProfileFromServer,
        getMyProfileFromServer,
        addMyProfileToServer,
        updateMyProfileFromServer,
        deleteMyProfile
    },
    {my_profile: {}, teachers: []}
);