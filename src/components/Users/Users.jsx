import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import axios from 'axios';

import css from "./Users.module.css";
import profileImage from '../../assets/profile.png';

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <Container>
            <h1>Users</h1>
            {
                this.props.users.map(u => <Row className={css.item} key={u.id}>
                    <Col xs={2}>
                        <div className={css.photo}>
                            <img src={u.photos.small === null ? profileImage : u.photos.small} alt={u.name} />
                        </div>
                        <div className={css.follow}>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
                </Row>)
            }
        </Container>
    }
}

export default Users;