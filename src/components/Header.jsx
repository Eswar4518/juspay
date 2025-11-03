import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="header flex items-center justify-between p-4 bg-white shadow">
      <img src={logo} alt="Logo" className="h-8" />
      <span className="font-bold">Juspay Dashboard</span>
    </header>
  );
}

export default Header;
