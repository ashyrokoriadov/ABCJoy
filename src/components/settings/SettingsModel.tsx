import React, { useEffect } from "react";
import Settings from "./Settings";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../redux/reducers";
import * as settingsAction from "../../redux/settings/thunk";
import * as messageActions from "../../redux/messages/thunk";
import { QuizSettings } from "../../models/QuizSettings";
import { MessageType } from "../../models/MessageType";

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
      showMessage: bindActionCreators(messageActions.showMessage, dispatch),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const SettingsModel = (props: PropsFromRedux) => {
  useEffect(() => {
    props.actions.loadQuizSettings();
  }, [props.settings.questionsCount, props.settings.timeBetweenQuestions]);

  function handleOk(settings: QuizSettings): void {
    props.actions.saveQuizSettings(settings);
    props.actions.showMessage("Ustawienia zostały zapisane", MessageType.INFO);
  }

  return <Settings {...{ settings: props.settings, handleOk }} />;
};

export default connector(SettingsModel);
