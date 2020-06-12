import React from "react";

export function renderKana(symbol, className = "") {
  return <p className={className}>{symbol}</p>;
}
