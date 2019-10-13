import React from 'react';

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