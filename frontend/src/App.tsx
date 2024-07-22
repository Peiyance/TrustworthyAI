import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RouterSwitch from './router/RouterSwitch';

function App() {
  return (
    <div>
      <Router>
        <RouterSwitch />
      </Router>
    </div>
  );
}

export default App;
