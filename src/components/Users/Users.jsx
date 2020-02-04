import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import css from "./Users.module.css";

let Users = (props) => {
    if (props.users.length === 0) { 
        props.setUsers([
            { id: 0, name: 'Valery', location: { country: 'Russia', city: 'Ufa' }, status: 'Hi!', followed: false, photo: 'https://a1-images.myspacecdn.com/images03/25/a518cca89ae3430ea04a0bcb758fac99/600x600.jpg' },
            { id: 1, name: 'Alena', location: { country: 'Ukraine', city: 'Keiv' }, status: 'Hello there!', followed: false, photo: 'https://a1-images.myspacecdn.com/images03/25/a518cca89ae3430ea04a0bcb758fac99/600x600.jpg' },
            { id: 2, name: 'Vasya', location: { country: 'Belarus', city: 'Minsk' }, status: 'Pumpurum', followed: false, photo: 'https://a1-images.myspacecdn.com/images03/25/a518cca89ae3430ea04a0bcb758fac99/600x600.jpg' },
            { id: 3, name: 'Jess', location: { country: 'USA', city: 'NY' }, status: ':)', followed: false, photo: 'https://a1-images.myspacecdn.com/images03/25/a518cca89ae3430ea04a0bcb758fac99/600x600.jpg' },
            { id: 4, name: 'Stewart', location: { country: 'UK', city: 'London' }, status: 'Welcome', followed: false, photo: 'https://a1-images.myspacecdn.com/images03/25/a518cca89ae3430ea04a0bcb758fac99/600x600.jpg' },
        ]);
    }

    return <Container>
                <h1>Users</h1>
        {
            props.users.map(u => <Row className={css.item} key={u.id}>
                    <Col xs={2}>
                        <div className={css.photo}>
                            <img src={u.photo} alt={u.name} />
                        </div>
                        <div className={css.follow}>
            { u.followed 
                ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button> 
                : <button onClick={() => { props.follow(u.id)}}>Follow</button> }
                        </div>
                    </Col>
                    <Col xs={8} className={css.info}>
                        <div>
                            <strong>{u.name}</strong><br />
                            {u.status}
                        
                        </div>
                    </Col>
                    <Col xs={2} className={css.location}>
                        {u.location.country}<br />
                        {u.location.city}
                    </Col>
                </Row>)
        }
    </Container>
}

export default Users;