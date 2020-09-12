import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Control from "./components/Control";
import Draggable from "react-draggable";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Control />
        <Footer />
      </div>
    );
  }
}

export default App;
