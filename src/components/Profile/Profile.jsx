import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Friends from './Friends/Friends';
import s from './Profile.module.css';

import { reduxForm, Field } from 'redux-form';

import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);

export const AddNewPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Label>Text</Form.Label>
            <Field
                component={Textarea}
                type="textarea"
                name="newPostText"
                rows="3"
                placeholder="Enter text..."
                validate={[required, maxLength100]}
            />
            <Button variant="primary" type="">
                Add post
            </Button>
        </Form>
    );
}

const Profile = (props) => {

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Profile</h1>

                    <ProfileInfo {...props} />

                    <Friends friends={props.friends} />

                    <h2>Posts</h2>
                    <div className={s.form_add_post}>
                        <ProfileAddNewPostForm onSubmit={onAddPost} />
                    </div>

                    <MyPosts posts={props.posts} />
                </Col>
            </Row>
        </Container>
    );
};

const ProfileAddNewPostForm = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm);

export default Profile;