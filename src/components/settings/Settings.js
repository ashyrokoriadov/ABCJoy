import React from "react";

const Settings = () => {
  return (
    <div id="settings">
      <div className="settings-label">Liczba pytań</div>
      <input
        type="number"
        className="settings-value"
        name="questionCount"
        placeholder="10"
      />
      <div className="settings-label">Czas między pytaniamy, sek.</div>
      <input
        type="number"
        className="settings-value"
        name="timeBetweenQuestion"
        placeholder="2"
      />
      <div className="settings-ok">OK</div>
      <div className="settings-cancel">Anuluj</div>
    </div>
  );
};

export default Settings;
