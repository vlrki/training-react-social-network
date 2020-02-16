import React from 'react';
import Profile from './Profile';
import { addPost, updateNewPost, getUserProfile } from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
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

    }
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPost, getUserProfile })(withUrlDataContainerComponent);