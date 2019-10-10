import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Header/>
      <Profile/>
    </>
  );
}

export default App;
