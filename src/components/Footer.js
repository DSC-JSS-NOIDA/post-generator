import React from "react";
import logo from '../assets/images/Main_logo.svg'
const Footer = () => {
  return (
    <footer>
      <div>
      Made with &#10084; By <a href="https://dscjss.in">DSC JSSATEN</a>
      <a
        href="https://github.com/dsc-jss-noida"
        className=" text-black github-footer"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fa fa-github-square mt-2 fa-2x"></i>
      </a>
      </div>
      <img src={logo} className="mt-2" width="250" alt=""/>
    </footer>
  );
};

export default Footer;
