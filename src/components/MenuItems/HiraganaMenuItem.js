import React from "react";
import PropTypes from "prop-types";

const HiraganaMenuItem = ({ categories, mapCategory }) => {
  return (
    <>
      <div className="menu-item menu-item-hiragana">
        <p className="menu-item-text"> あ </p>
      </div>
      <div
        className="sliding-menu sliding-menu-hiragana"
        id="sub-menu-hiragana"
      >
        <div className="sub-menu-items sub-menu-items-hiragana">
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
        <div className="sliding-menu-header">
          <span className="sub-menu-item-header"> Hiragana </span>
        </div>
      </div>
    </>
  );
};

HiraganaMenuItem.propTypes = {
  categories: PropTypes.array.isRequired,
  mapCategory: PropTypes.func.isRequired,
};

export default HiraganaMenuItem;
