
import createDataContext from "./createDataContext";

const myProfileReducer = (state, action) => {
    switch (action.type){
        case 'reset':
            return { my_profile: {} }
        case 'set_profile_from_server':
            return { my_profile: action.payload.profile };
        case 'add_my_photo_uri':
            return { ...state, my_profile: {...(state.my_profile), photo: action.payload.photo }}
        case 'add_my_card_background_color':
            return { ...state, my_profile: {...(state.my_profile), cardBackgroundColor: action.payload }}
        case 'add_my_name':
            return { ...state, my_profile: {...(state.my_profile), name: action.payload }}
        case 'add_my_sex':
            return { ...state, my_profile: {...(state.my_profile), sex: action.payload }}
        case 'add_my_instrument':
            return { ...state, my_profile: {...(state.my_profile), instrument: action.payload }}
        case 'add_my_city':
            return { ...state, my_profile: {...(state.my_profile), location: { city: action.payload.city, region: "" } }}
        case 'add_my_region':
            return { ...state, my_profile: {...(state.my_profile), location: { ...(state.my_profile.location), region: action.payload.region } }}
        case 'add_my_contact':
            return { ...state, my_profile: {...(state.my_profile), contact: { address: action.payload } }}
        case 'add_my_description':
            return { ...state, my_profile: {...(state.my_profile), description: action.payload }}
        default:
            return state;
    }
}

const resetMyProfile = (dispatch) => () => {
    dispatch({ type: 'reset'});
}

const setMyProfileFromServer = (dispatch) => (profile) => {
    if(profile && Object.keys(profile).length !== 0) {

        dispatch({ type: 'set_profile_from_server', payload: { profile }});
    }
}

const addMyPhoto = (dispatch) => ({ photo }) => {
    dispatch({ type: 'add_my_photo_uri', payload: { photo }});
}

const addMyCardBackgroundColor = (dispatch) => (cardBackgroundColor) => {
    dispatch({ type: 'add_my_card_background_color', payload: cardBackgroundColor });
}

const addMyName = (dispatch) => (name) => {
    dispatch({ type: 'add_my_name', payload: name });
}

const addMySex = (dispatch) => (sex) => {
    dispatch({ type: 'add_my_sex', payload: sex });
}

const addMyInstrument = (dispatch) => (instrument) => {
    dispatch({ type: 'add_my_instrument', payload: instrument })
}

const addMyCity = (dispatch) => (city) => {
    dispatch({ type: 'add_my_city', payload: { city }})
}

const addMyRegion = (dispatch) => (region) => {
    dispatch({ type: 'add_my_region', payload: { region }});
}

const addMyContact = (dispatch) => (address) => {
    dispatch({ type: 'add_my_contact', payload: address });
}

const addMyDescription = (dispatch) => (description) => {
    dispatch({ type: 'add_my_description', payload: description });
}


export const { Context, Provider } = createDataContext(
    myProfileReducer,
    {
        resetMyProfile,
        setMyProfileFromServer,
        addMyPhoto,
        addMyCardBackgroundColor,
        addMyName,
        addMySex,
        addMyInstrument,
        addMyCity,
        addMyRegion,
        addMyContact,
        addMyDescription,
    },
    { my_profile: {} }
);