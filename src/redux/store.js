import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;