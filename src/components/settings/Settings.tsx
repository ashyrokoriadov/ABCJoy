import React, { useState } from "react";
import { SettingsProps } from "../../models/props/SettingsProps";
import { validateNumberRange } from "../../components/common/validators/NumberRangeValidator";
import {
  NumberRangeRule,
  questionCountRule,
  timeBetweenQuestionsRule,
} from "../../components/common/validators/ValidationRules";

const Settings = (props: SettingsProps) => {
  const [questionsCount, setQuestionsCount] = useState(
    props.settings.questionsCount
  );
  const [timeBetweenQuestions, setTimeBetweenQuestions] = useState(
    props.settings.timeBetweenQuestions
  );

  function handleNumberChange(e, setState, rule: NumberRangeRule) {
    if (validateNumberRange(e.target.value, rule)) {
      setState(e.target.value);
    } else {
      console.log(
        `Validation failed: ${e.target.value}, ${rule.min}, ${rule.max}.`
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
        min={questionCountRule.min}
        max={questionCountRule.max}
        value={questionsCount}
        onChange={(e) => {
          handleNumberChange(e, setQuestionsCount, questionCountRule);
        }}
        title={`Właściwość przyjmuje wartości w przedziale od ${questionCountRule.min} do ${questionCountRule.max}.`}
      />
      <div className="settings-label">Czas między pytaniamy, sek.</div>
      <input
        type="number"
        className="settings-value"
        name="timeBetweenQuestions"
        min={timeBetweenQuestionsRule.min}
        max={timeBetweenQuestionsRule.max}
        value={timeBetweenQuestions}
        onChange={(e) => {
          handleNumberChange(
            e,
            setTimeBetweenQuestions,
            timeBetweenQuestionsRule
          );
        }}
        title={`Właściwość przyjmuje wartości w przedziale od ${timeBetweenQuestionsRule.min} do ${timeBetweenQuestionsRule.max}.`}
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

export default Settings;
