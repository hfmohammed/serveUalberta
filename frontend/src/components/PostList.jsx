import React from 'react';
import Post from './Post';

function PostList() {
    const posts = [
        // This would typically come from a state or props
        { id: 1, content: "Looking for research assistants in AI.", comments: [] },
        { id: 2, content: "Opportunity in renewable energy research.", comments: [] }
    ];

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} content={post.content} comments={post.comments} />
            ))}
        </div>
    );
}

export default PostList;
