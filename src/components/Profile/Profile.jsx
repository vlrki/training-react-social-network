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

const Profile = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Profile</h1>

                    <ProfileInfo />

                    <Friends friends={props.friends} />

                    <h2>Posts</h2>
                    <div className={s.form_add_post}>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Text</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter text..."
                                          ref={newPostElement}
                                          onChange={onPostChange}
                                          value={props.newPostText} />
                        </Form.Group>
                        <Button variant="primary" type="" onClick={addPost}>
                            Submit
                        </Button>
                    </div>

                    <MyPosts posts={props.posts} />
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;