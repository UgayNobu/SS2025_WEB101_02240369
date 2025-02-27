import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Interactive Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
