const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true
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

        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsers = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching: isFetching });


export default usersReducer;