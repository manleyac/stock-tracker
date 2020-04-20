import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="navbar">
         <h1><Link to="/">Stock Tracker</Link></h1>
         <ul></ul>
      </nav>
   )
}

export default Navbar;
