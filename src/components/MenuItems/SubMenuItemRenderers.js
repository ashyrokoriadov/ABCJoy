import React from "react";

export function renderKanjiSubMenuItem(symbol) {
  return <i className={symbol}></i>;
}

export function renderKanaSubMenuItem(symbol) {
  return <p className="sub-menu-item-text">{symbol}</p>;
}
