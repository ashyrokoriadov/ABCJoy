import React from "react";
import PropTypes from "prop-types";

export default function QuizStatistics(props) {
  const { type } = props;
  return (
    <div id="statistics">
      <div className="statistics-label"> Typ zadania </div>
      <div className="statistics-value"> {type} </div>
      <div className="statistics-label"> Prawidłowe odpowiedzi </div>
      <div className="statistics-value"> 5 / 15 </div>
      <div className="statistics-label"> Czas </div>
      <div className="statistics-value"> 00: 27 </div>
    </div>
  );
}

QuizStatistics.propTypes = {
  type: PropTypes.object.isRequired,
};
