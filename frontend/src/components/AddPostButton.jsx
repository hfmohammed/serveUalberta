import React from 'react';

export default function AddPostButton() {
  const handleAddPost = async () => {
    const postData = {
      author_name: "author_name", 
      deadline: "data",
      openings: 4, 
      term_length: "term_length",
      majors: {},
      description: "", 
      title: "", 
      posted_on: "", 
    };

    try {
      const response = await fetch('http://localhost:3000/addPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error: ' + error.message);
    }
  };

  return (
    <button onClick={handleAddPost}>Add Post</button>
  );
};
