import React from 'react';

import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)

    return (
        <div className="posts">

            {postsElements}

        </div>
    );
}

export default MyPosts;