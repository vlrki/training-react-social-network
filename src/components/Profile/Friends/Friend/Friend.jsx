import React from 'react';

import Col from 'react-bootstrap/Col';

import s from "../Friend/Friends.module.css";

const Friend = (props) => {

    let path = '/profile/' + props.id;

    return (
        <Col xs={2} className={s.item}>
            <a href={path}>
                <img src="https://cdn.wallpapersafari.com/11/79/xMyfJT.jpg" alt={props.name}/>
                <span>{props.name}</span>
            </a>
        </Col>
    );
}

export default Friend;