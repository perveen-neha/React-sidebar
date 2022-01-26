import React from 'react';
import './App.css';
import Home from './home';
import Modal from './modal';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Modal/>
      <Home/>
    </div>
  );
}

export default App;
