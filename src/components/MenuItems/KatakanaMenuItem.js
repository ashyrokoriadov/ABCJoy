import React from "react";

export default function KatakanaMenuItem() {
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
          <div className="sliding-menu-item">
            <p className="sub-menu-item-text"> ホ </p>
          </div>
          <div className="sliding-menu-item">
            <p className="sub-menu-item-text"> ボ </p>
          </div>
          <div className="sliding-menu-item">
            <p className="sub-menu-item-text"> ポ </p>
          </div>
        </div>
        <div className="sliding-menu-header test-class">
          <span className="sub-menu-item-header"> Katakana </span>
        </div>
      </div>
    </>
  );
}
