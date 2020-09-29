import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Sidebar from './components/sidebar';
import About from './components/about';
import Certifications from './components/certifications';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Education></Education>
            <Experience></Experience>
            <Projects></Projects>
            <Certifications></Certifications>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
