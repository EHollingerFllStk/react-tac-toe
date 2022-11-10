import React from 'react';
import Header from "./components/Header";
import Player from "./components/Player"
import './App.css';

function App() {
  return (
        <div>
          <Header/>
          <Player whichPlayer='X'/>
          <Player whichPlayer='O'/>
        </div>
  );
}

export default App;
