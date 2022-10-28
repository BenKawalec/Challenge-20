import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

return (
  <header className="bg-gray-800 md:sticky top-0 z-10 ">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
      <a className="title-font font-medium text-white mb-4 md:mb-0">
      <NavLink className="navbar-brand" to="/">Ben Kawalec</NavLink>
      </a>
      <nav className="flex flex-wrap items-center text-base ">
        <NavLink className="nav-link text-white mx-3" to="/about">About Me</NavLink>
        <NavLink className='nav-link text-white mx-3' to='/portfolio'>Portfolio</NavLink>
        <NavLink className='nav-link text-white mx-3' to='/contact'>Contact</NavLink>
        <NavLink className='nav-link text-white mx-3' to='/resume'>Resume</NavLink>
     </nav>
    </div>
  </header>
);
}

export default Nav;

