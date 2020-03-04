import { userAPI } from '../api/userAPI';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }

                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }

                    return u;
                }),
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            };

        default:
            return state;
    }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsers = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching: isFetching });
export const setFollowingInProgress = (userId, isFetching) => ({ type: SET_FOLLOWING_IN_PROGRESS, isFetching: isFetching, userId: userId });


export const requestUsers = (page, pageSize) => {

    return (dispatch) => {

        dispatch(setIsFetching(true));

        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount));
            dispatch(setCurrentPage(page));
            dispatch(setIsFetching(false));
        });
    }
}

export const follow = (userId) => {

    return (dispatch) => {

        dispatch(setFollowingInProgress(userId, true));

        userAPI.follow(userId).then(data => {
            dispatch(followSuccess(userId));
            dispatch(setFollowingInProgress(userId, false));
        });
    }
}

export const unfollow = (userId) => {

    return (dispatch) => {

        dispatch(setFollowingInProgress(userId, true));

        userAPI.unfollow(userId).then(data => {
            dispatch(unfollowSuccess(userId));
            dispatch(setFollowingInProgress(userId, false));
        });
    }
}


export default usersReducer;