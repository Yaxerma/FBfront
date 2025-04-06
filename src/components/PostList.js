import React from 'react';
import Post from './Post';

const PostList = ({ posts, onLike, friends }) => {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <Post
                    key={post._id}
                    post={post}
                    onLike={onLike}
                    friends={friends}
                />
            ))}
        </div>
    );
};

export default PostList; 