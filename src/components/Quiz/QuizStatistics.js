import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export function QuizStatistics(props) {
  const { type, correctAnswersCount } = props;
  let answersCount = correctAnswersCount == undefined ? 0 : correctAnswersCount;
  return (
    <div id="statistics">
      <div className="statistics-label"> Typ zadania </div>
      <div className="statistics-value"> {type} </div>
      <div className="statistics-label"> Prawidłowe odpowiedzi </div>
      <div className="statistics-value"> {answersCount} / 15 </div>
      <div className="statistics-label"> Czas </div>
      <div className="statistics-value"> 00: 27 </div>
    </div>
  );
}

QuizStatistics.propTypes = {
  type: PropTypes.object.isRequired,
  correctAnswersCount: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    correctAnswersCount: state.correctAnswerCount,
  };
}

export default connect(mapStateToProps)(QuizStatistics);
