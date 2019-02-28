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
          <Link to="lesson2">Lesson 2 👽</Link>
          <Link to="lesson3">Lesson 3 💅</Link>
          <Link to="lesson4">Lesson 4 🛶</Link>
          <Link to="lesson5">Lesson 5 🚀</Link>
        </Navbar>
        <AppStyles>
          <Router>
            <Home path="/" />
            <Lesson1 path="lesson1" />
            <Lesson2 path="lesson2" />
            <Lesson3 path="lesson3" />
            <Lesson4 path="lesson4" />
            <Lesson5 path="lesson5" />
          </Router>
        </AppStyles>
      </di>
    );
  }
}

export default App;
