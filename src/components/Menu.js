import React from "react";
import JapanFlag from "./JapanFlag";
import KanjiMenuItemPage from "./MenuItems/KanjiMenuItemPage";
import HiraganaMenuItem from "./MenuItems/HiraganaMenuItem";
import KatakanaMenuItem from "./MenuItems/KatakanaMenuItem";

export default function Menu() {
  return (
    <div className="nav">
      <JapanFlag />
      <KanjiMenuItemPage />
      <HiraganaMenuItem />
      <KatakanaMenuItem />
    </div>
  );
}
