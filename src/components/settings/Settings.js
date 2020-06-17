import React from "react";

const Settings = () => {
  return (
    <div id="settings">
      <div className="settings-label">Liczba pytań</div>
      <input
        type="number"
        className="settings-value"
        name="questionsCount"
        placeholder="10"
      />
      <div className="settings-label">Czas między pytaniamy, sek.</div>
      <input
        type="number"
        className="settings-value"
        name="timeBetweenQuestions"
        placeholder="2"
      />
      <div className="settings-ok">OK</div>
      <div className="settings-cancel">Anuluj</div>
    </div>
  );
};

export default Settings;
