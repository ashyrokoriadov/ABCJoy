import React from "react";

export default function HiraganaMenuItem() {
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
          <div className="sliding-menu-item">
            <p className="sub-menu-item-text"> ほ </p>
          </div>
          <div className="sliding-menu-item">
            <p className="sub-menu-item-text"> ぼ </p>
          </div>
          <div className="sliding-menu-item">
            <p className="sub-menu-item-text"> ぽ </p>
          </div>
        </div>
        <div className="sliding-menu-header">
          <span className="sub-menu-item-header"> Hiragana </span>
        </div>
      </div>
    </>
  );
}
