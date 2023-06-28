import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebarnav.css";

const SideNavBar = () => {
  return (
    <div id="sidebar">
      <h1>Netlingo</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to={`learn`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`profile`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`settings`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavBar;
