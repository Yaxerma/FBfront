import React, { useState } from 'react';

const CreatePost = ({ onCreatePost }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            onCreatePost(content);
            setContent('');
        }
    };

    return (
        <div className="create-post">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                    rows="4"
                    required
                />
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default CreatePost; 