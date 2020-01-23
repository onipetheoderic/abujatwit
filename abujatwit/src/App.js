import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Hompage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hompage/>
    </div>
  );
}

export default App;
