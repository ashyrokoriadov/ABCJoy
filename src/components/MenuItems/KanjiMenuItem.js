import React from "react";
import PropTypes from "prop-types";

const KanjiMenuItem = ({ categories, mapCategory }) => {
  return (
    <>
      <div className="menu-item menu-item-kanji">
        <p className="menu-item-text"> 語 </p>
      </div>
      <div className="sliding-menu sliding-menu-kanji" id="sub-menu-kanji">
        <div className="sub-menu-items sub-menu-items-kanji">
          {categories.map((category) => {
            return (
              <div
                key={category}
                className="sliding-menu-item"
                title={category}
              >
                <i className={mapCategory(category)}></i>
              </div>
            );
          })}
        </div>
        <div className="sliding-menu-header">
          <span className="sub-menu-item-header"> Kanji </span>
        </div>
      </div>
    </>
  );
};

KanjiMenuItem.propTypes = {
  categories: PropTypes.array.isRequired,
  mapCategory: PropTypes.func.isRequired,
};

export default KanjiMenuItem;
