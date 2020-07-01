import React from "react";
import { connect, ConnectedProps } from "react-redux";
//import PropTypes from "prop-types";
import * as messageActions from "../../redux/messages/actions";
//import * as questionActions from "../../redux/actions/questionActions";
//import * as timerActions from "../../redux/actions/quizTimerActions";
//import * as correctAnswersActions from "../../redux/actions/correctAnswerActions";
import { bindActionCreators } from "redux";
import { RootState } from "../../redux/reducers";
import { withRouter } from "react-router";
import { History } from "history";

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
          //actions.setQuestionIndex(0);
          //actions.resetCorrectAnswersCount();
          //actions.resetTimer();
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

/*
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      requestCloseMessage: bindActionCreators(messageActions.requestCloseMessage, dispatch),
      showInfoMessage: bindActionCreators(messageActions.showInfoMessage, dispatch),
      setQuestionIndex: bindActionCreators(
        questionActions.setQuestionIndex,
        dispatch
      ),
      resetCorrectAnswersCount: bindActionCreators(
        correctAnswersActions.resetCorrectAnswersCount,
        dispatch
      ),
      resetTimer: bindActionCreators(timerActions.resetTimer, dispatch),
    },
  };
}
*/

export default connector(Message);
