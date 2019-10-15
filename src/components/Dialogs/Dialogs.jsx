import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <Nav.Item>
            <Nav.Link as={NavLink} to={path}>{props.name}</Nav.Link>
        </Nav.Item>
    );
}

const Message = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.messages_item}>{props.message}</div>
    );
}

const Dialogs = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <Nav defaultActiveKey="/dialogs" className="flex-column">
                        <DialogItem id="1" name="Vasya"/>
                        <DialogItem id="2" name="Katya"/>
                        <DialogItem id="3" name="Masha"/>
                        <DialogItem id="4" name="Dima"/>
                    </Nav>
                </Col>
                <Col>
                    <h1>Dialogs</h1>

                    <div className={s.messages}>
                        <Message message="Hi!" />
                        <Message message="Hello!" />
                        <Message message="How are you?" />
                        <Message message="Fine thanks." />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Dialogs;