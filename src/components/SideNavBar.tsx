import React from "react";
import "../styles/sidebarnav.css";

const SideNavBar = () => {
  return (
    <div id="sidebar">
      <h1>Netlingo</h1>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/1`}>Learn</a>
          </li>
          <li>
            <a href={`/contacts/2`}>Profile</a>
          </li>
          <li>
            <a href={`/contacts/2`}>Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavBar;
