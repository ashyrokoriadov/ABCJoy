import React, { useEffect } from "react";
import Settings from "./Settings";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../store";
import * as settingsAction from "../../store/settings/actions";
import * as messageActions from "../../store/messages/actions";
import { QuizSettings } from "../../models/QuizSettings";
import { MessageType } from "../../models/enums/MessageType";

const mapState = (state: RootState) => ({
  settings: state.settings,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      loadQuizSettings: bindActionCreators(
        settingsAction.loadSettings,
        dispatch
      ),
      saveQuizSettings: bindActionCreators(
        settingsAction.saveSettings,
        dispatch
      ),
      showInfoMessage: bindActionCreators(
        messageActions.showInfoMessage,
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

  function handleOk(settings: QuizSettings): void {
    props.actions.saveQuizSettings(settings);
    props.actions.showInfoMessage("Ustawienia zostały zapisane");
  }

  return <Settings {...{ settings: props.settings, handleOk }} />;
};

export default connector(SettingsModel);
