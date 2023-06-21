import React from "react";
import "./App.css";
import NavbarElement from "./components/Navbar/NavbarElements";
import mainLogo from "./mainLogo.png";

function App() {
  return (
    <div>
      <NavbarElement />
      <img className="web-logo" src={mainLogo} alt="logo" />
      <div className="App-header" />
    </div>
  );
}

export default App;
