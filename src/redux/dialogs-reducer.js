const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 0, name: 'Vasya'},
        {id: 1, name: 'Katya'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Dima'},
    ],
    messages: [
        {id: 0, message: 'Hi!'},
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine thanks.'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
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