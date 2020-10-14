import React from 'react';
import Game from './Game.js';
import NavBar from './NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
    <NavBar/>
    <Game/>
    </div>
  );
}

export default App;
