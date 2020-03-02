import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';

import s from './Dialogs.module.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { reduxForm, Field } from 'redux-form';

import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="formMessage">
            <Field component={Textarea}
                rows="3"
                name="newMessageBody"
                placeholder="Enter text..."
                validate={[required, maxLength100]}
            />
        </Form.Group>
        <Button variant="primary" type="">
            Submit
        </Button>
    </Form>;
}

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name} />);
    let messagesElements = props.messages.map(m => <DialogMessage id={m.id} key={m.id} message={m.message} />);

    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody);
    }

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

                    <div className={s.form_add_message}>
                        <AddMessageFormRedux onSubmit={addNewMessage} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;