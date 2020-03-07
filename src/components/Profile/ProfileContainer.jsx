import React from 'react';

import Profile from './Profile';
import { addPost, getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId && this.props.isAuth) {
            userId = 5851 //this.props.authorizedUserId; //;
        } else {
            // <Redirect to="login" />
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        posts: state.profilePage.posts,
        friends: state.profilePage.friends,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, { addPost, getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
