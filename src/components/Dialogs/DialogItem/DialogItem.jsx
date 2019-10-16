import React from 'react';

import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <Nav.Item>
            <Nav.Link as={NavLink} to={path}>{props.name}</Nav.Link>
        </Nav.Item>
    );
}

export default DialogItem;