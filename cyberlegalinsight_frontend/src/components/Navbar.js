import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import UIIcons from "./UIIcons";
import "./Navbar.css";

// PUBLIC_INTERFACE
/**
 * Navbar
 * Modern, adaptive navigation bar with main links, logo, and theme toggle.
 */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <UIIcons.LogoSymbol className="logo-symbol" />
          CyberLegalInsight
        </div>
        <div className="nav-links">
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/assessment"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Assessment
          </NavLink>
          <NavLink
            to="/contract-upload"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Contract Upload
          </NavLink>
          <NavLink
            to="/results"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Results
          </NavLink>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
