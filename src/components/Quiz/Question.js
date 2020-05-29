import React from "react";

export default function Question() {
  return (
    <>
      <div id="question"> 6. み </div>
      <div id="answers">
        <div id="answer-one" className="answer wrong">
          KA
        </div>
        <div id="answer-two" className="answer">
          NO
        </div>
        <div id="answer-three" className="answer">
          RA
        </div>
        <div id="answer-four" className="answer correct">
          MI
        </div>
      </div>
    </>
  );
}
