import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
