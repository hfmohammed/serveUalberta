import React from 'react';

function CommentSection({ comments }) {
    return (
        <div>
            <h3>Comments</h3>
            {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
            ))}
            <input type="text" placeholder="Add a comment..." />
            <button>Comment</button>
        </div>
    );
}

export default CommentSection;
