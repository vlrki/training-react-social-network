import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Profile</h1>

                    <ProfileInfo />

                    <h2>Posts</h2>
                    <Form className={s.form_add_post}>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Text</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter text..." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <MyPosts posts={props.state.posts}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;