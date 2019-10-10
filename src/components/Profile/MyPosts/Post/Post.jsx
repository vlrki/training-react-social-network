import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import s from './Post.module.css';

const Post = (props) => {
    return (        
      <Row className={s.item}>
        <Col xs="2"><img src="https://cdn.wallpapersafari.com/11/79/xMyfJT.jpg"></img></Col>
        <Col xs="10">{props.message}</Col>
      </Row>
    );
}

export default Post;