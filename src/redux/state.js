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
        ]
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

export default state;