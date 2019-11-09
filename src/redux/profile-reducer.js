const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(post);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', text: text });

export default profileReducer;