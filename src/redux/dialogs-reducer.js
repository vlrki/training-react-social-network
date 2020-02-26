const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 0, name: 'Vasya' },
        { id: 1, name: 'Katya' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Dima' },
    ],
    messages: [
        { id: 0, message: 'Hi!' },
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Fine thanks.' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {
                ...state,
                messages: [...state.messages, { id: 4, message: action.newMessageBody }]
            };

            return stateCopy;
        }

        default:
            return state;
    }
};

export const addNewMessageCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;