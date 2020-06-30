import React, { useEffect } from "react";
import Settings from "./Settings";
//import PropTypes from "prop-types";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../redux/reducers";
import * as settingsAction from "../../redux/settings/thunk";
//import * as messageActions from "../../redux/actions/messageActions";
//import { INFO } from "../common/MessageTypes";
import { QuizSettings } from "../../models/QuizSettings";

const mapState = (state: RootState) => ({
  settings: state.settings,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      loadQuizSettings: bindActionCreators(
        settingsAction.loadQuizSettings,
        dispatch
      ),
      saveQuizSettings: bindActionCreators(
        settingsAction.saveQuizSettings,
        dispatch
      ),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const SettingsModel = (props: PropsFromRedux) => {
  useEffect(() => {
    props.actions.loadQuizSettings();
  }, [props.settings.questionsCount, props.settings.timeBetweenQuestions]);

  function handleOK(settings: QuizSettings): void {
    props.actions.saveQuizSettings(settings);
    //actions.showMessage("Ustawienia zostały zapisane", INFO);
  }

  return <Settings {...props.settings} />;
};
/*
const SettingsModel = (props) => {
  const { questionsCount, timeBetweenQuestions, actions } = props;

  useEffect(() => {
    actions.loadSettings();
  }, [questionsCount, timeBetweenQuestions]);

  function handleOK(questionsCount, timeBetweenQuestions) {
    actions.saveSettings({
      questionsCount: Number(questionsCount),
      timeBetweenQuestions: Number(timeBetweenQuestions),
    });
    actions.showMessage("Ustawienia zostały zapisane", INFO);
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
      showMessage: bindActionCreators(messageActions.showMessage, dispatch),
    },
  };
}
*/

export default connector(SettingsModel);
