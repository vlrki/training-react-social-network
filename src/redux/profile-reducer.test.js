import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, { addPostCreator, deletePostCreator } from './profile-reducer';

let state = {
    posts: [
        { id: 0, message: 'Excelent!', likesCount: 4 },
        { id: 1, message: 'Wow', likesCount: 5 },
        { id: 2, message: 'Hi!', likesCount: 2 },
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostCreator('test');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});


it('after deleting length of posts should be decremented', () => {
    // 1. test data
    let action = deletePostCreator(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});
