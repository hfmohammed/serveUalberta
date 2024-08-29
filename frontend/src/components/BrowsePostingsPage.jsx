import React, { useState, useEffect } from 'react';
import '../assets/BrowsePostingsPage.css';

function BrowsePostingsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5111/posts'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
        console.log(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error loading posts: {error}</div>;
  }

  if (!posts.length) {
    return <div>No posts available</div>;
  }

  return (
    <div className="browse-postings-page">
      <h2>Browse Research Postings</h2>
      {posts.map((post, index) => (
        <div
          key={`${post.email}-${post.posted_on}-${post.text}-${index}`} // Unique key using a combination of fields
          className="post"
        >
          <p><strong>Author:</strong> {post.email}</p>
          <p><strong>Posted On:</strong> {new Date(post.posted_on).toLocaleString()}</p>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default BrowsePostingsPage;
