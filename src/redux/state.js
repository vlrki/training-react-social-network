const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('rerenderEntireTree');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let post = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(post);
            this._state.profilePage.newPostText = '';

            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;

            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let post = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(post);
            this._state.dialogsPage.newMessageText = '';

            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.message;

            this._callSubscriber(this._state);
        }
    }
};

export const sendMessageCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, message: message });


window.store = store;

export default store;