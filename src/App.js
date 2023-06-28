import './App.css';
import React, { useEffect, useState } from 'react';

import Nav from './components/Nav';
import Input from './components/Input';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Saved from './components/Saved';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Register from './components/Register';


function App() {

  return (
    <div className="App contents">
      <Router>
        <div className="app">
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/savedpage' exact element={<Saved />} />
        </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
