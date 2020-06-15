import React from "react";
import { NavLink } from "react-router-dom";

const SettingsMenuItem = () => {
  return (
    <>
      <NavLink to={"/settings"}>
        <div className="menu-item menu-item-settings">
          <p className="menu-item-text">S</p>
        </div>
      </NavLink>
      <div className="sliding-menu-static sliding-menu-settings">
        <div className="sliding-menu-header">
          <span className="sub-menu-item-header">Ustawienia</span>
        </div>
      </div>
    </>
  );
};

export default SettingsMenuItem;
