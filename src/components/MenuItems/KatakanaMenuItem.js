import React from "react";
import PropTypes from "prop-types";

const KatakanaMenuItem = ({ categories, mapCategory }) => {
  return (
    <>
      <div className="menu-item menu-item-katakana">
        <p className="menu-item-text"> ア </p>
      </div>
      <div
        className="sliding-menu sliding-menu-katakana"
        id="sub-menu-katakana"
      >
        <div className="sub-menu-items sub-menu-items-katakana">
          {categories.map((category) => {
            return (
              <div
                key={category}
                className="sliding-menu-item"
                title={category}
              >
                <p className="sub-menu-item-text">{mapCategory(category)}</p>
              </div>
            );
          })}
        </div>
        <div className="sliding-menu-header test-class">
          <span className="sub-menu-item-header"> Katakana </span>
        </div>
      </div>
    </>
  );
};

KatakanaMenuItem.propTypes = {
  categories: PropTypes.array.isRequired,
  mapCategory: PropTypes.func.isRequired,
};

export default KatakanaMenuItem;
