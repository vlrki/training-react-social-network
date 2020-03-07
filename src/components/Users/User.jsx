import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom'

import css from "./Users.module.css";
import profileImage from '../../assets/profile.png';


let User = ({ user, followingInProgress, onUnfollow, onFollow }) => {
    return <Row className={css.item} key={user.id}>
        <Col xs={2}>
            <div className={css.photo}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small === null ? profileImage : user.photos.small} alt={user.name} />
                </NavLink>
            </div>
            <div className={css.follow}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { onUnfollow(user.id) }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { onFollow(user.id) }}>Follow</button>}
            </div>
        </Col>
        <Col xs={8} className={css.info}>
            <div>
                <strong>{user.name}</strong><br />
                {user.status}

            </div>
        </Col>
        <Col xs={2} className={css.location}>
            {"user.location.country"}<br />
            {"user.location.city"}
        </Col>
    </Row>
}

export default User;