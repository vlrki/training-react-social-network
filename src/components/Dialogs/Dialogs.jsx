import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

    let dialogsElements = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements = messagesData.map(m => <Message id={m.id} message={m.message}/>);

    return (
        <Container>
            <Row>
                <Col><h1>Dialogs</h1></Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Nav defaultActiveKey="/dialogs" className="flex-column">

                        {dialogsElements}

                    </Nav>
                </Col>
                <Col>
                    <div className={s.messages}>

                        {messagesElements}

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Dialogs;