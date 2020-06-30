import React from "react";

export function renderKanjiSubMenu(symbol: string): JSX.Element {
  return <span className={symbol}></span>;
}

export function renderKanaSubMenu(symbol: string): JSX.Element {
  return <p className="sub-menu-item-text">{symbol}</p>;
}
