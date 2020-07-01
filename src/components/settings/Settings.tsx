import React, { useState } from "react";
import { SettingsProps } from "../../models/SettingsProps";

const Settings = (props: SettingsProps) => {
  const [questionsCount, setQuestionsCount] = useState(
    props.settings.questionsCount
  );
  const [timeBetweenQuestions, setTimeBetweenQuestions] = useState(
    props.settings.timeBetweenQuestions
  );

  const questionsCountMax = 10;
  const questionsCountMin = 1;

  const timeBetweenQuestionsMax = 5;
  const timeBetweenQuestionsMin = 1;

  function handleNumberChange(e, setState, minValue, maxValue) {
    if (validateNumberRange(e.target.value, minValue, maxValue)) {
      setState(e.target.value);
    } else {
      console.log(
        `Validation failed: ${e.target.value}, ${minValue}, ${maxValue}.`
      );
    }
  }

  return (
    <div id="settings">
      <div className="settings-label">Liczba pytań</div>
      <input
        type="number"
        className="settings-value"
        name="questionsCount"
        min={questionsCountMin}
        max={questionsCountMax}
        value={questionsCount}
        onChange={(e) => {
          handleNumberChange(
            e,
            setQuestionsCount,
            questionsCountMin,
            questionsCountMax
          );
        }}
        title={`Właściwość przyjmuje wartości w przedziale od ${questionsCountMin} do ${questionsCountMax}.`}
      />
      <div className="settings-label">Czas między pytaniamy, sek.</div>
      <input
        type="number"
        className="settings-value"
        name="timeBetweenQuestions"
        min={timeBetweenQuestionsMin}
        max={timeBetweenQuestionsMax}
        value={timeBetweenQuestions}
        onChange={(e) => {
          handleNumberChange(
            e,
            setTimeBetweenQuestions,
            timeBetweenQuestionsMin,
            timeBetweenQuestionsMax
          );
        }}
        title={`Właściwość przyjmuje wartości w przedziale od ${timeBetweenQuestionsMin} do ${timeBetweenQuestionsMax}.`}
      />
      <div
        className="settings-ok"
        onClick={() => {
          props.handleOk({ questionsCount, timeBetweenQuestions });
        }}
      >
        OK
      </div>
    </div>
  );
};

const validateNumberRange = (actualValue, minValue, maxValue) =>
  actualValue >= minValue && actualValue <= maxValue;

export default Settings;
