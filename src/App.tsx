import * as React from "react";
import "./styles/app.css";
import SideNavBar from "./components/SideNavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <SideNavBar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default App;
