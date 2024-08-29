import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('a@a.a'); // Assume you get the email from context or props
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with actual user email retrieval
    const userEmail = email; // Or fetch from context or state

    try {
      const response = await fetch('http://localhost:5111/addPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: userEmail,
          text
        })
      });

      if (response.ok) {
        console.log('Post submitted successfully');
        navigate('/browse-postings'); // Navigate to the postings page
      } else {
        const errorResult = await response.json();
        alert('Error submitting post: ' + errorResult.message);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error: ' + error.message);
    }
  };

  return (
    <div className="create-post-page">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something..."
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePostPage;
