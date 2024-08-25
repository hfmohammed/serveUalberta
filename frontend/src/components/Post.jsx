import React from 'react';
import CommentSection from './CommentSection';

function Post({ content, comments }) {
    return (
        <div>
            <p>{content}</p>
            <CommentSection comments={comments} />
        </div>
    );
}

export default Post;
