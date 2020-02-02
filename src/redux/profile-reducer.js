const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 0, message: 'Excelent!', likesCount: 4},
        {id: 1, message: 'Wow', likesCount: 5},
        {id: 2, message: 'Hi!', likesCount: 2},
    ],
    friends: [
        {id: 0, name: 'Vasya'},
        {id: 1, name: 'Katya'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Petya'},
        {id: 5, name: 'Rita'},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };

            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(post);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', text: text });

export default profileReducer;