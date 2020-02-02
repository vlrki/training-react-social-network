import React from 'react';
import Profile from './Profile';

import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import StoreContext from '../../StoreContext';

const ProfileContainer = (props) => {
    return (
        <StoreContext.Consumer>
        { 
            (store) => {
                let state = store.getState();
            
                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                };
            
                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action);
                };

                return <Profile
                    addPost={addPost}
                    onPostChange={onPostChange}
                    posts={state.profilePage.posts}
                    friends={state.profilePage.friends}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    );
};

export default ProfileContainer;