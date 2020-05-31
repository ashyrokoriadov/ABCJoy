import React from "react";
import JapanFlag from "./JapanFlag";
import KanjiMenuItemPage from "./MenuItems/KanjiMenuItemPage";
import HiraganaMenuItemPage from "./MenuItems/HiraganaMenuItemPage";
import KatakanaMenuItemPage from "./MenuItems/KatakanaMenuItemPage";

export default function Menu() {
  return (
    <div className="nav">
      <JapanFlag />
      <KanjiMenuItemPage />
      <HiraganaMenuItemPage />
      <KatakanaMenuItemPage />
    </div>
  );
}
