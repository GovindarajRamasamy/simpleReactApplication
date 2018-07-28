import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => (
  <header>
    <section>
    <div className="container">
        <span className="react-logo">
          <span className="nucleo"></span>
        </span>      
    </div>
    <div className="title">
      <span><h1>Simple React Application</h1></span>
      </div>
    </section>
    <section>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/timer'>Timer</Link></li>
          <li><Link to='/addNumber'>Sum</Link></li>
          <li><Link to='/removeSpace'>Space Remover</Link></li>
        </ul>
      </nav>
    </section>    
  </header>
)

export default Header;