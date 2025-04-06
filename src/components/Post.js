import React from 'react';

const Post = ({ post, onLike, friends }) => {
    const handleLike = (friendName) => {
        const isLiked = post.likedBy.includes(friendName);
        onLike(post._id, friendName, isLiked);
    };

    return (
        <div className="post">
            <div className="post-content">{post.content}</div>
            <div className="post-stats">
                <span>{post.likes} likes</span>
                {post.likedBy.length > 0 && (
                    <div className="liked-by">
                        Liked by: {post.likedBy.join(', ')}
                    </div>
                )}
            </div>
            <div className="like-buttons">
                {friends.map((friend) => (
                    <button
                        key={friend}
                        onClick={() => handleLike(friend)}
                    >
                        {post.likedBy.includes(friend) ? `👎 ${friend}` : `👍 ${friend}`}
                    </button>
                ))}
            </div>
            <div className="post-time">
                {new Date(post.createdAt).toLocaleString()}
            </div>
        </div>
    );
};

export default Post;