import React from "react";
import { connect, ConnectedProps } from "react-redux";
import * as messageActions from "../../store/messages/actions";
import * as questionActions from "../../store/question/actions";
import * as timerActions from "../../store/quizTimer/actions";
import * as correctAnswersActions from "../../store/correctAnswer/actions";
import { bindActionCreators } from "redux";
import { RootState } from "../../store";

const mapState = (state: RootState) => ({
  shouldDisplay: state.message.shouldDisplay,
  text: state.message.text,
  messageType: state.message.messageType,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      requestCloseMessage: bindActionCreators(
        messageActions.requestCloseMessage,
        dispatch
      ),
      showInfoMessage: bindActionCreators(
        messageActions.showInfoMessage,
        dispatch
      ),
      setQuestionIndex: bindActionCreators(
        questionActions.setQuestionIndexSuccess,
        dispatch
      ),
      resetCorrectAnswersCount: bindActionCreators(
        correctAnswersActions.resetCounter,
        dispatch
      ),
      resetTimer: bindActionCreators(timerActions.resetTimer, dispatch),
    },
  };
}

const connector = connect(mapState, mapDispatch);

const Message = (props) => {
  return props.shouldDisplay ? (
    <div className="message">
      <div className="text"> {props.text}</div>
      <div
        className={"button " + props.messageType}
        onClick={() => {
          props.actions.requestCloseMessage();
          props.actions.setQuestionIndex(0);
          props.actions.resetCorrectAnswersCount();
          props.actions.resetTimer();
          props.push("/");
        }}
      >
        Zamknij
      </div>
    </div>
  ) : (
    <></>
  );
};

export default connector(Message);
