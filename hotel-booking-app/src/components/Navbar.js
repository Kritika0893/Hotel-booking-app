import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar bg">
      <a className="navbar-brand" >
        <span className="naming">Explore</span>
      </a>
      

      
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" >
            <div className="naming">Home </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
             <div className="naming"> Book Hotel</div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
            <div className="naming"> Pricing</div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
            <div className="naming">Login with Google</div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
            <div className="naming"> Signup</div>
            </a>
          </li>
          <li className="nav-item">
          <input type="text" placeholder="Search ..."/>
          </li>
          
        </ul>
      
    </nav>
    </>
  );
};

export default Navbar;
