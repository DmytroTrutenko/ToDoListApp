import React from "react";
import logo from '../assets/todolistlogo.png';
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <NavLink
            className="navbar-brand"
            to="/"
        >
            <img src={logo} alt="logo"/>
            To Do App
        </NavLink>

        <div className="links">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>

            </ul>
        </div>
    </nav>
);