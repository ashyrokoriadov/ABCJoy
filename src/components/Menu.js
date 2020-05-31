import React from "react";
import JapanFlag from "./JapanFlag";
import KanjiMenuItemPage from "./MenuItems/KanjiMenuItemPage";
import HiraganaMenuItem from "./MenuItems/HiraganaMenuItem";
import KatakanaMenuItemPage from "./MenuItems/KatakanaMenuItemPage";

export default function Menu() {
  return (
    <div className="nav">
      <JapanFlag />
      <KanjiMenuItemPage />
      <HiraganaMenuItem />
      <KatakanaMenuItemPage />
    </div>
  );
}
