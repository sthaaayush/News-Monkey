import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <NewsComponent />
      </>
    )
  }
}

