import React from "react";

export function renderKanjiSubMenuItem(symbol) {
  var spanStyle = {
    color: "black",
  };
  return <span style={spanStyle} className={symbol}></span>;
}

export function renderKanaSubMenuItem(symbol) {
  return <p className="sub-menu-item-text">{symbol}</p>;
}
