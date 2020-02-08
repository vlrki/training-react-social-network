import React from 'react';
import { connect } from 'react-redux';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersActionCreator, setIsFetchingActionCreator} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount(props) {
        this.props.setIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersActionCreator(response.data.totalCount);
                this.props.setIsFetching(false);                
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);        
        this.props.setCurrentPage(pageNumber);
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
            });
    }

    render() { 
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged} 
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
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
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersActionCreator: (totalUsersCount) => {
            dispatch(setTotalUsersActionCreator(totalUsersCount));
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
