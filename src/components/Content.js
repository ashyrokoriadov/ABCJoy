import React from "react";
import Quiz from "./Quiz/Quiz";
import MessagePanel from "./common/Message";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function Content(props) {
  const { abc, type } = useParams();
  return (
    <div className="content">
      <Quiz abc={abc} type={type} quiz={[]} />
      <MessagePanel history={props.history} />
    </div>
  );
}

Content.propTypes = {
  history: PropTypes.object.isRequired,
};
