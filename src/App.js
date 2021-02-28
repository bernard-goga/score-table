import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import BodyWrapper from './components/bodywrapper';
import Playercard from './components/playercard';
import PlayerList from './components/playerlist';

function App() {
  return (
    <div className="App">
      <Header />
    <BodyWrapper>
      <PlayerList />
    </BodyWrapper>
    </div>
  );
}

export default App;
