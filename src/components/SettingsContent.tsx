import React from "react";
import MessagePanel from "./common/Message";
import SettingsModel from "./settings/SettingsModel";
import PropTypes from "prop-types";

const SettingsContent = (props) => {
  return (
    <div className="content">
      <SettingsModel />
      <MessagePanel {...props.history} />
    </div>
  );
};

SettingsContent.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SettingsContent;
