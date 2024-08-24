import React from 'react';
import PostList from './PostList';
import CreatePostForm from './CreatePostForm';

function HomePage() {
    return (
        <div>
            <h1>Research Opportunities</h1>
            <CreatePostForm /> {/* Component to create new posts */}
            <PostList /> {/* Component to list all posts */}
        </div>
    );
}
export default HomePage;
