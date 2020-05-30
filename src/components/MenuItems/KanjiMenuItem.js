import React from "react";

export default function KanjiMenuItem() {
  return (
    <>
      <div className="menu-item menu-item-kanji">
        <p className="menu-item-text"> 語 </p>
      </div>
      <div className="sliding-menu sliding-menu-kanji" id="sub-menu-kanji">
        <div className="sub-menu-items sub-menu-items-kanji">
          <div className="sliding-menu-item item-1-1" title="adjectives">
            <i className="fab fa-amilia fa-2x"></i>
          </div>
          <div className="sliding-menu-item item-1-2" title="adverbs">
            <i className="fas fa-ad fa-2x"> </i>
          </div>
          <div className="sliding-menu-item item-1-3" title="examples">
            <i className="fab fa-buromobelexperte fa-2x"></i>
          </div>
          <div className="sliding-menu-item item-2-1" title="nouns">
            <i className="fas fa-globe-europe fa-2x"></i>
          </div>
          <div className="sliding-menu-item item-2-2" title="verbs">
            <i className="fas fa-play fa-2x"></i>
          </div>
          <div className="sliding-menu-item item-2-3" title="numbers">
            <i className="fas fa-dice fa-2x"></i>
          </div>
          <div className="sliding-menu-item item-3-1" title="surnames">
            <i className="far fa-address-book fa-2x"></i>
          </div>
          <div className="sliding-menu-item item-3-2" title="ownNames">
            <i className="far fa-address-card fa-2x"></i>
          </div>
          <div className="sliding-menu-item item-3-3" title="weekdays">
            <i className="far fa-sun fa-2x"> </i>
          </div>
        </div>
        <div className="sliding-menu-header">
          <span className="sub-menu-item-header"> Kanji </span>
        </div>
      </div>
    </>
  );
}
