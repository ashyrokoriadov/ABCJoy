import React, { useEffect } from "react";
import Settings from "./Settings";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as settingsAction from "../../redux/actions/settingsActions";

const SettingsModel = (props) => {
  const { questionsCount, timeBetweenQuestions, actions } = props;

  useEffect(() => {
    actions.loadSettings();
  }, [questionsCount, timeBetweenQuestions]);

  function handleOK(questionsCount, timeBetweenQuestions) {
    console.log("questionsCount: " + questionsCount);
    console.log("timeBetweenQuestions: " + timeBetweenQuestions);
    actions.saveSettings({
      questionsCount: Number(questionsCount),
      timeBetweenQuestions: Number(timeBetweenQuestions),
    });
  }

  return (
    <Settings
      questionsCount={questionsCount}
      timeBetweenQuestions={timeBetweenQuestions}
      handleOK={handleOK}
    />
  );
};

SettingsModel.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  timeBetweenQuestions: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    questionsCount: state.settings.questionsCount,
    timeBetweenQuestions: state.settings.timeBetweenQuestions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadSettings: bindActionCreators(settingsAction.loadSettings, dispatch),
      saveSettings: bindActionCreators(settingsAction.saveSettings, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModel);
