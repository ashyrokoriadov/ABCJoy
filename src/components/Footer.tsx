import React from "react";

export default function Footer(): JSX.Element {
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
        <p>
          Created with&nbsp;
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,&nbsp;
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
          ,&nbsp;
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          ,&nbsp;
          <a
            href="https://redux-saga.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux-Saga
          </a>
        </p>
      </span>
    </div>
  );
}
