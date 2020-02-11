import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsers, setIsFetching, setFollowingInProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/userAPI';

class UsersContainer extends React.Component {

    componentDidMount(props) {
        this.props.setIsFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.totalUsersCount).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
            this.props.setIsFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setIsFetching(false);
        });
    }

    onFollow = (userId) => {
        this.props.setFollowingInProgress(userId, true);

        userAPI.follow(userId).then(data => {              
            this.props.follow(userId);
            this.props.setFollowingInProgress(userId, false);
        });
    }

    onUnfollow = (userId) => {
        this.props.setFollowingInProgress(userId, true);        

        userAPI.unfollow(userId).then(data => {
            this.props.unfollow(userId);
            this.props.setFollowingInProgress(userId, false);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onFollow={this.onFollow}
                onUnfollow={this.onUnfollow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsers, setIsFetching, setFollowingInProgress
})(UsersContainer);
