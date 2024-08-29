import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BrowsePostingsPage from './BrowsePostingsPage';

function HomePage() {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/create-post');
  };

  return (
    <div>
      <button onClick={handleCreatePost}>Post</button>
      <BrowsePostingsPage />
    </div>
  );
}

export default HomePage;
