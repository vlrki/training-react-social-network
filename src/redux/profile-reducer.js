import { userAPI, profileAPI } from '../api/userAPI';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';

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
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {
                ...state,
                posts: [...state.posts, { id: 3, message: action.newPostText, likeCount: 0 }],
            };

            return stateCopy;
        }

        case DELETE_POST: {
            let stateCopy = {
                ...state,
                posts: [...state.posts.filter(p => p.id != action.postId)],
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

        case SET_PHOTO_SUCCESS: {
            debugger;
            let stateCopy = {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };

            return stateCopy;
        }

        default:
            return state;
    }
};

export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePostCreator = (postId) => ({ type: DELETE_POST, postId: postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const setStatus = (status) => ({ type: SET_STATUS, status: status });
export const savePhotoSuccess = (photos) => ({ type: SET_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.putStatus(status);

    if (response.data.resultCode === 1) {
        dispatch(setStatus(status));
    }
};

export const addPost = (newPostText) => (dispatch) => {
    dispatch(addPostCreator(newPostText));
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;