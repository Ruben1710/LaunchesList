import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import './styles/Global.css'

function App() {

  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;




