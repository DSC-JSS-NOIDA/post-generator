import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Control from './components/Control'
import Draggable from 'react-draggable';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Control/>

      </div>  
    )
  }
}

export default App
