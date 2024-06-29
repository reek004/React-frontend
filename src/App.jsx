import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
     <header className="App-header">
      <Navbar />
      <Hero />
    </header>
    </div>
  );
}

export default App;