import React from "react";
import "./App.css";
import NavbarElement from "./components/Navbar/NavbarElements";
import mainLogo from "./img/mainLogo.png";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import Plantalog from "./pages/plantalog/plantalog";
import Design from "./pages/design/design";
import Blogs from "./pages/blogs/blogs";

function App() {
  return (
    <>
      <NavbarElement />
      <img className="web-logo" src={mainLogo} alt="logo" />
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plantalog" element={<Plantalog />} />
          <Route path="/design" element={<Design />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
