import React from 'react';

import Row from 'react-bootstrap/Row';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let friendsElements = props.friends.map(f => <Friend id={f.id} key={f.id} name={f.name} />)

    return (
        <div className="friends">
            <h2>Friends</h2>

            <Row>
            {friendsElements}
            </Row>

        </div>
    );
}

export default Friends;