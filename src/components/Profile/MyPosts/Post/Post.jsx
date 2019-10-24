import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import s from './Post.module.css';

const Post = (props) => {
    return (        
      <Row className={s.item}>
        <Col xs="2"><img src="https://cdn.wallpapersafari.com/11/79/xMyfJT.jpg" alt=""></img></Col>
        <Col xs="10">{props.message}</Col>
      </Row>
    );
}

export default Post;