import React from "react";
import { Navbar } from "reactstrap";
import logo from '../assets/images/logo.jpeg'

export default function Header() {
  return (
    <Navbar dark expand="md">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          &nbsp;&nbsp;&nbsp;
          <img src={logo} alt="" width="200"/>
        </div>

        <a
          href="https://github.com/dsc-jss-noida"
          className="text-decoration-none text-white github-icon"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github fa-3x mr-3"></i>
        </a>
      </div>
    </Navbar>
  );
}
