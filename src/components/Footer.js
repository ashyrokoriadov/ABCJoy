import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <span id="footer-text">
        © 2020&nbsp;
        <a
          href="https://ashyrokoriadov.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andriy Shyrokoryadov
        </a>
        <br />
        Created with&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </span>
    </div>
  );
}
