import React, { useState } from 'react';

function CreatePostForm() {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Post Content:', content);
        // Here you would typically handle posting the content to a backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write something..."
            />
            <button type="submit">Post</button>
        </form>
    );
}

export default CreatePostForm;
