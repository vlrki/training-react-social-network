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

    let dialogsData = [
        {id: 0, name: 'Vasya'},
        {id: 1, name: 'Katya'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Dima'},
    ];

    let messagesData = [
        {id: 0, message: 'Hi!'},
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine thanks.'},
    ];

    return (
        <Container>
            <Row>
                <Col><h1>Dialogs</h1></Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Nav defaultActiveKey="/dialogs" className="flex-column">
                        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                    </Nav>
                </Col>
                <Col>
                    <div className={s.messages}>
                        <Message id={messagesData[0].id} message={messagesData[0].message} />
                        <Message id={messagesData[1].id} message={messagesData[1].message} />
                        <Message id={messagesData[2].id} message={messagesData[2].message} />
                        <Message id={messagesData[3].id} message={messagesData[3].message} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Dialogs;