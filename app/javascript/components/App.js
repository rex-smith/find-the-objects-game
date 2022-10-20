import { Outlet, NavLink } from "react-router-dom";
import React from "react";
// import "./styles/App.css";
import "../../assets/stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-brand">
          {/* <div className="logo">
            <img src="./components/images/logo.svg" alt="Website Logo" />
          </div> */}
          <div className="brand-name">
            Where's Cage<span className="brand-punctuation">?</span>
          </div>
        </div>
        <div className="nav-menu">
          <NavLink to="/">
            <div className="nav-menu-item">About</div>
          </NavLink>
          <NavLink to="../game">
            <div className="nav-menu-item">Game</div>
          </NavLink>
          <NavLink to="../records">
            <div className="nav-menu-item">Records</div>
          </NavLink>
        </div>
      </nav>
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
