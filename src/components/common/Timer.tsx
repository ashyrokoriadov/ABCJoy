import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../store";
import * as timerActions from "../../store/quizTimer/thunk";

const mapState = (state: RootState) => ({
  isActive: state.quizTimer.isActive,
  value: state.quizTimer.value,
});

function mapDispatch(dispatch) {
  return {
    actions: {
      incrementTimer: bindActionCreators(timerActions.incrementTimer, dispatch),
    },
  };
}

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Timer = (props: PropsFromRedux) => {
  useEffect(() => {
    if (props.isActive) {
      let interval = setInterval(() => {
        props.actions.incrementTimer(props.value + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      return () => {};
    }
  }, [props.value, props.isActive]);

  return <>{intToTimestring(props.value)}</>;
};

function intToTimestring(number: number): string {
  number = number == undefined || isNaN(number) ? 0 : number;
  var date = new Date(0);
  date.setSeconds(number);
  return date.toISOString().substr(11, 8);
}

export default connector(Timer);
