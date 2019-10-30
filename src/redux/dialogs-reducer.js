const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let post = {
                id: 4,
                message: state.newMessageText
            };
            state.messages.push(post);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;

        default:
            return state;
    }
};

export const addNewMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: message});

export default dialogsReducer;