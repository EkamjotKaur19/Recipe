import './App.css';
import React from 'react';

import Nav from './components/Nav';
import Input from './components/Input';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import { TaggedContentCard } from 'react-ui-cards';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import Banner from './components/Banner/Banner';


function App() {

  return (
    <div className="App contents">
      <Nav />
      <Banner />
      <Header />
      <Input />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
