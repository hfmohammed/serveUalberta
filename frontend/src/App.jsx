import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import CreatePostPage from './components/CreatePostPage';
import BrowsePostingsPage from './components/BrowsePostingsPage';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Research Opportunities Platform</h1>
        </header>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/browse-postings" element={<BrowsePostingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
