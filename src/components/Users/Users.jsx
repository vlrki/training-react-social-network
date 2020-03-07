import React from 'react';

import Container from 'react-bootstrap/Container';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = (props) => {
    return <Container>
        <h1>Users</h1>
        
        {
            props.users.map(u => 
                <User user={u} followingInProgress={props.followingInProgress} onUnfollow={props.onUnfollow} onFollow={props.onFollow} />
            )
        }

        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
    </Container>
}

export default Users;