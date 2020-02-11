import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import { NavLink } from 'react-router-dom'

import css from "./Users.module.css";
import profileImage from '../../assets/profile.png';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(
            <Pagination.Item key={i} active={i === props.currentPage} onClick={() => { props.onPageChanged(i) }}>
                {i}
            </Pagination.Item>,
        );
    }

    return <Container>
        <h1>Users</h1>
        {
            props.users.map(u => <Row className={css.item} key={u.id}>
                <Col xs={2}>
                    <div className={css.photo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small === null ? profileImage : u.photos.small} alt={u.name} />
                        </NavLink>
                    </div>
                    <div className={css.follow}>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.onUnfollow(u.id) }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.onFollow(u.id) }}>Follow</button>}
                    </div>
                </Col>
                <Col xs={8} className={css.info}>
                    <div>
                        <strong>{u.name}</strong><br />
                        {u.status}

                    </div>
                </Col>
                <Col xs={2} className={css.location}>
                    {"u.location.country"}<br />
                    {"u.location.city"}
                </Col>
            </Row>
            )
        }

        <Pagination>{pages.map(p => p)}</Pagination>
    </Container>
}

export default Users;