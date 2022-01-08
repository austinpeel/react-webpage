// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className='App'>
      <div>
        <nav>
          <ul id='navigation'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
