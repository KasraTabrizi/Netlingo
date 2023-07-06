import * as React from "react";
import Configuration from "../components/Configuration";
import addLoader from "../hoc/addLoader";

const ConfigurationWithLoader = addLoader(Configuration);

const Settings = () => {
  return (
    <div className="settings__container">
      <h1>Settings</h1>
      <ConfigurationWithLoader />
    </div>
  );
};

export default Settings;
