import React from "react";

export default function KanjiMenuItem() {
  return (
    <>
      <div className="menu-item menu-item-kanji">
        <p className="menu-item-text"> 語 </p>
      </div>
      <div className="sliding-menu sliding-menu-kanji" id="sub-menu-kanji">
        <div className="sub-menu-items sub-menu-items-kanji">
          <div className="sliding-menu-item item-1-1">
            <i className="fa fa-graduation-cap fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-1-2">
            <i className="fa fa-bell fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-1-3">
            <i className="fa fa-key fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-2-1">
            <i className="fa fa-suitcase fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-2-2">
            <i className="fa fa-calendar fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-2-3">
            <i className="fa fa-car fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-3-1">
            <i className="fa fa-plane fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-3-2">
            <i className="fa fa-flask fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-3-3">
            <i className="fa fa-filter fa-2x"> </i>
          </div>
        </div>
        <div className="sliding-menu-header">
          <span className="sub-menu-item-header"> Kanji </span>
        </div>
      </div>
    </>
  );
}
