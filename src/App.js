import React from "react";
import "./App.css";
import NavbarElement from "./components/Navbar/NavbarElements";
import mainLogo from "./img/mainLogo.png";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavbarElement />
      <img className="web-logo" src={mainLogo} alt="logo" />
      <div className="App-header">
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
