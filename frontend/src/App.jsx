import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Research Opportunities Platform</h1>
        </header>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
