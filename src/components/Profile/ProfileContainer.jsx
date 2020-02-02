import React from 'react';
import Profile from './Profile';
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        posts: state.profilePage.posts,
        friends: state.profilePage.friends,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        onPostChange: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;