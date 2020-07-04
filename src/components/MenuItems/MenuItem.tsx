import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItemProps } from "../../models/props/MenuItemProps";

const MenuItem = (menuItemProps: MenuItemProps) => {
  return (
    <>
      <div className={"menu-item menu-item-" + menuItemProps.abcTypeCss}>
        <p className="menu-item-text"> {menuItemProps.menuItemText} </p>
      </div>
      <div
        className={"sliding-menu sliding-menu-" + menuItemProps.abcTypeCss}
        id={"sub-menu-" + menuItemProps.abcTypeCss}
      >
        <div
          className={
            "sub-menu-items sub-menu-items-" + menuItemProps.abcTypeCss
          }
        >
          {menuItemProps.categories.map((category) => {
            return (
              <NavLink
                key={category}
                to={"/" + menuItemProps.abcType + "/" + category}
              >
                <div className="sliding-menu-item" title={category}>
                  {menuItemProps.renderSubMenuItem(category)}
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="sliding-menu-header">
          <span className="sub-menu-item-header">
            {menuItemProps.subMenuItemHeader}
          </span>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
