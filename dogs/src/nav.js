import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Navbar1 = (props) => {
    return (
      <div className="navBar1">
        <header>
        <Link to="/"><i class="fas fa-paw"></i></Link>

          <div className="fontAwesome">
          <Link to="/about"><i class="fas fa-info-circle">&nbsp;About Us</i></Link>
          </div>
        </header>
  
      </div>
    );
  };
  
  export default Navbar1;