import React from "react";
import JapanFlag from "./JapanFlag";
import KanjiMenuItem from "./MenuItems/KanjiMenuItem";
import HiraganaMenuItem from "./MenuItems/HiraganaMenuItem";
import KatakanaMenuItem from "./MenuItems/KatakanaMenuItem";

export default function Menu() {
  return (
    <div className="nav">
      <JapanFlag />
      <KanjiMenuItem />
      <HiraganaMenuItem />
      <KatakanaMenuItem />
    </div>
  );
}
