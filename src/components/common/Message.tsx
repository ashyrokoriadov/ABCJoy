import React from "react";
import { connect, ConnectedProps } from "react-redux";
import * as messageActions from "../../redux/messages/actions";
import * as questionActions from "../../redux/question/actions";
import * as timerActions from "../../redux/quizTimer/actions";
import * as correctAnswersActions from "../../redux/correctAnswer/actions";
import { bindActionCreators } from "redux";
import { RootState } from "../../redux/reducers";

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
      resetTimer: bindActionCreators(timerActions.dispatchResetTimer, dispatch),
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
