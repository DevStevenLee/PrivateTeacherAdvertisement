import createDataContext from "./createDataContext";


const teacherProfilesReducer = (state, action) => {
    switch (action.type) {
        case 'set_profile_from_server':
            return { ...state, "teachers": action.payload }
        case 'set_teacher_bookmark':
            const index = action.payload.index;
            const isBookmarked = action.payload.isBookmarked;

            state.teachers[index].bookmark = isBookmarked;
            return { ...state }
        default:
            return state;
    }
}


const setTeachersProfileFromServer = (dispatch) => (teachers) => {
    if(teachers.length >= 0) {
        const newTeachers = teachers.map(teacher => {
            teacher['bookmark'] = false
            return teacher;
        });

        for(let i = 0 ; i < newTeachers.length ; i++){
            newTeachers[i].index = i;
        }

        dispatch({ type: 'set_profile_from_server', payload: newTeachers });
    }
}

const setTeacherBookmark = (dispatch) => ({ index, isBookmarked }) => {
    dispatch({ type: "set_teacher_bookmark", payload: { index, isBookmarked} });
}


export const { Context, Provider } = createDataContext(
    teacherProfilesReducer,
    {
        setTeachersProfileFromServer,
        setTeacherBookmark
    },
    { teachers: [] }
);