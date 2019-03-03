import { Link, Router } from '@reach/router';
import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Home from './components/Home';
import Lesson1 from './components/Lesson1';
import Lesson2 from './components/Lesson2';
import Lesson3 from './components/Lesson3';
import Lesson4 from './components/Lesson4';
import Lesson5 from './components/Lesson5';
import Lesson7 from './components/Lesson6';
import Lesson6 from './components/Lesson7';
import Lesson8 from './components/Lesson8';
import Lesson9 from './components/Lesson9';
import Navbar from './components/Navbar';

const AppStyles = styled.div`
  padding: 20px;
`;

class App extends Component {
  render() {
    return (
      <di>
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="lesson1">Lesson 1 💪</Link>
          <Link to="lesson2">Lesson 2 🎨</Link>
          <Link to="lesson3">Lesson 3 💅</Link>
          <Link to="lesson4">Lesson 4 🛶</Link>
          <Link to="lesson5">Lesson 5 👽</Link>
          <Link to="lesson6">Lesson 6 🚀</Link>
          <Link to="lesson7">Lesson 7 ✨</Link>
          <Link to="lesson8">Lesson 8 🗺</Link>
          <Link to="lesson9">Lesson 9 🤖</Link>
        </Navbar>
        <AppStyles>
          <Router>
            <Home path="/" />
            <Lesson1 path="lesson1" />
            <Lesson2 path="lesson2" />
            <Lesson3 path="lesson3" />
            <Lesson4 path="lesson4" />
            <Lesson5 path="lesson5" />
            <Lesson6 path="lesson6" />
            <Lesson7 path="lesson7" />
            <Lesson8 path="lesson8" />
            <Lesson9 path="lesson9" />
          </Router>
        </AppStyles>
      </di>
    );
  }
}

export default App;
