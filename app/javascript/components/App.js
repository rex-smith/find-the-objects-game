import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import "../../assets/stylesheets/reset.css";
import "../../assets/stylesheets/styles.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">
          <div className="nav-brand">
            <div className="brand-name">
              Find the hidden objects
              <span className="brand-punctuation">!</span>
            </div>
          </div>
        </NavLink>
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
