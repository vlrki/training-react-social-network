import React from 'react';

import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 0, message: 'Excelent!', likesCount: 4},
        {id: 1, message: 'Wow', likesCount: 5},
        {id: 2, message: 'Hi!', likesCount: 2},
    ];

    let postsElements = postsData.map(m => <Post message={m.message} likesCount={m.likesCount}/>)

    return (
        <div className="posts">

            {postsElements}

        </div>
    );
}

export default MyPosts;