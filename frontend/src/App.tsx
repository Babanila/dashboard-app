import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header classname="app-header" logoSrc={logo} imgClassname="header-logo" />

      <>Check it out</>
    </div>
  );
}

export default App;
