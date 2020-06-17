import React from "react";
import SettingsModel from "./settings/SettingsModel";

const SettingsContent = () => {
  return (
    <div className="content">
      <SettingsModel questionsCount={0} timeBetweenQuestions={0}/>
    </div>
  );
};

export default SettingsContent;
