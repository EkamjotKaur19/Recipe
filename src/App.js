import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Input from './components/Input';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Input />
      <About />
      <Footer />
    </div>
  );
}

export default App;
