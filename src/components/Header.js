import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
    <div className="Navbar">
      <div className="logo">EduRev</div>
      <div className="buttons">
        <button className="login">Login</button>
        <button className="join-now">Join now!</button>
      </div>
    </div>
      <div/>
    </header>
  );
}

export default Header;
