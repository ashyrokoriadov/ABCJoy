import React from "react";

export function renderKana(
  symbol: string,
  className: string = ""
): JSX.Element {
  return <p className={className}>{symbol}</p>;
}
