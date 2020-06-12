import React from "react";

export function renderKanjiSubMenuItem(symbol) {
  return <span className={symbol}></span>;
}

export function renderKanaSubMenuItem(symbol) {
  return <p className="sub-menu-item-text">{symbol}</p>;
}
