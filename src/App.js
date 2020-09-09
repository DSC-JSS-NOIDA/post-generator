import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Control from './components/Control'
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
