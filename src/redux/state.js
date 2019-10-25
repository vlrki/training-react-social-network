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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('rerenderEntireTree');
    },
    addPost() {
        let post = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };

        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = '';

        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

window.store = store;

export default store;