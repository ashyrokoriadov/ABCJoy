import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as timerActions from "../../redux/actions/quizTimerActions";
import { bindActionCreators } from "redux";

export function Timer(props) {
  let isActive = props.isActive == undefined ? false : props.isActive;
  let value = props.value == undefined ? 0 : props.value;

  useEffect(() => {
    if (isActive) {
      let interval = setInterval(() => {
        props.actions.incrementTimer(value + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [value, isActive]);

  return <>{intToTimestring(value)}</>;
}

Timer.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.number,
  actions: PropTypes.object.isRequired,
};

function intToTimestring(number) {
  number = number == undefined || isNaN(number) ? 0 : number;
  var date = new Date(0);
  date.setSeconds(number);
  return date.toISOString().substr(11, 8);
}

function mapStateToProps(state) {
  return {
    isActive: state.quizTimer.isActive,
    value: state.quizTimer.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      incrementTimer: bindActionCreators(timerActions.incrementTimer, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
