import React from 'react';
import Profile from './Profile';

import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";

const ProfileContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Profile
            addPost={addPost}
            onPostChange={onPostChange}
            posts={state.profilePage.posts}
            friends={state.profilePage.friends}
            newPostText={state.profilePage.newPostText}
        />
    );
};

export default ProfileContainer;