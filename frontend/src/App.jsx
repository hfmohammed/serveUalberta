import { useState } from 'react';
import './App.css';
import Signup from './components/Signup.jsx';
 
function App() { 
    return (
      <div className="App">
          <header className="App-header">
              <Signup/>
          </header>
      </div>
  );
}
export default App;