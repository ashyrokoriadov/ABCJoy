import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItem = ({
  categories,
  renderSubMenuItem,
  abcTypeCss,
  abcType,
  menuItemText,
  subMenuItemHeader,
}) => {
  return (
    <>
      <div className={"menu-item menu-item-" + abcTypeCss}>
        <p className="menu-item-text"> {menuItemText} </p>
      </div>
      <div
        className={"sliding-menu sliding-menu-" + abcTypeCss}
        id={"sub-menu-" + abcTypeCss}
      >
        <div className={"sub-menu-items sub-menu-items-" + abcTypeCss}>
          {categories.map((category) => {
            return (
              <NavLink key={category} to={"/" + abcType + "/" + category}>
                <div className="sliding-menu-item" title={category}>
                  {renderSubMenuItem(category)}
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="sliding-menu-header">
          <span className="sub-menu-item-header"> {subMenuItemHeader} </span>
        </div>
      </div>
    </>
  );
};

MenuItem.propTypes = {
  categories: PropTypes.array.isRequired,
  renderSubMenuItem: PropTypes.func.isRequired,
  abcTypeCss: PropTypes.string.isRequired,
  abcType: PropTypes.string.isRequired,
  menuItemText: PropTypes.string.isRequired,
  subMenuItemHeader: PropTypes.string.isRequired,
};

export default MenuItem;
