import React from 'react';

import Post from './Post/Post';

const MyPosts = () => {

    let messagesData = [
        {id: 0, message: 'Excelent!', likesCount: 4},
        {id: 1, message: 'Wow', likesCount: 5},
        {id: 2, message: 'Hi!', likesCount: 2},
    ];

    return (        
      <div className="posts">
        <Post message={messagesData[0].message} likesCount={messagesData[0].likesCount} />
        <Post message={messagesData[1].message} likesCount={messagesData[1].likesCount} />
        <Post message={messagesData[2].message} likesCount={messagesData[2].likesCount} />
      </div>
    );
}

export default MyPosts;