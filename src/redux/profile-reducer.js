import { userAPI, profileAPI } from '../api/userAPI';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 0, message: 'Excelent!', likesCount: 4 },
        { id: 1, message: 'Wow', likesCount: 5 },
        { id: 2, message: 'Hi!', likesCount: 2 },
    ],
    friends: [
        { id: 0, name: 'Vasya' },
        { id: 1, name: 'Katya' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Rita' },
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {
                ...state,
                posts: [...state.posts, { id: 3, message: state.newPostText, likeCount: 0 }],
                newPostText: ''
            };

            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText: action.text
            };

            return stateCopy;
        }

        case SET_USER_PROFILE: {
            let stateCopy = {
                ...state,
                profile: action.profile
            };

            return stateCopy;
        }

        case SET_STATUS: {
            let stateCopy = {
                ...state,
                status: action.status
            };

            return stateCopy;
        }

        default:
            return state;
    }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const setStatus = (status) => ({ type: SET_STATUS, status: status });

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.putStatus(status)
        .then(response => {
            if (response.data.resultCode === 1) {
                dispatch(setStatus(status));
            }
        });
};

export default profileReducer;