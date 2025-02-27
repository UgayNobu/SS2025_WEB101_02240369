import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Interactive Dashboard</h1>
      <nav aria-label="Main Navigation">
        <ul className="nav-links">
          <li><a href="#" role="button">Home</a></li>
          <li><a href="#" role="button">Profile</a></li>
          <li><a href="#" role="button">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
