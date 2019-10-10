import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Post from './Post/Post';

const MyPosts = () => {
    return (        
      <div className="posts">
        <Post message="Excelent!"/>
        <Post message="Wow"/>
        <Post message="Hi!"/>
      </div>
    );
}

export default MyPosts;