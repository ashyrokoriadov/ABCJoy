import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as messageActions from "../../redux/actions/messageActions";
import * as questionActions from "../../redux/actions/questionActions";
import * as correctAnswersActions from "../../redux/actions/correctAnswerActions";
import { bindActionCreators } from "redux";

export function Message(props) {
  const { actions, shouldDisplay, text, messageType, history } = props;
  return shouldDisplay ? (
    <div className="message">
      <div className="text"> {text}</div>
      <div
        className={"button " + messageType}
        onClick={() => {
          actions.closeMessage();
          actions.setQuestionIndex(0);
          actions.resetCorrectAnswersCount();
          history.push("/");
        }}
      >
        Zamknij
      </div>
    </div>
  ) : (
    <></>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
  shouldDisplay: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    text: state.message.text,
    messageType: state.message.messageType,
    shouldDisplay: state.message.shouldDisplay,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      closeMessage: bindActionCreators(messageActions.closeMessage, dispatch),
      showMessage: bindActionCreators(messageActions.showMessage, dispatch),
      setQuestionIndex: bindActionCreators(
        questionActions.setQuestionIndex,
        dispatch
      ),
      resetCorrectAnswersCount: bindActionCreators(
        correctAnswersActions.resetCorrectAnswersCount,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
