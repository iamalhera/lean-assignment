import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="app__navbar flex-row">
      <div className="navbar__left flex-row">
        <img src={logo} alt="logo" />
        <div className="navbar__links flex-row-center">
          <Link to="/">Homepages</Link>
          <Link>Products</Link>
          <Link>Company  </Link>
          <Link to="/signin">SignIn</Link>
          <Link to="signup">Signup</Link>
        </div>
      </div>
      <div className="navbar__right flex-row-center">
        <Link>+00 123 456 789</Link>
        <button className="primary-cta">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Navbar