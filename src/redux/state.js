let rerenderEntireTree = () => {
    console.log('rerenderEntireTree');
};

let state = {
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
};

window.state = state;

export const addPost = () => {
    let post = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;