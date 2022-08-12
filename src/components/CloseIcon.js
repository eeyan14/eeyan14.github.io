import React from "react";
import "../styles/components/crossIcon.css";

const CloseIcon = (props) => {
  const {
    height, // string: icon height
  } = props;

  return (
    <div className="cross-icon" style={!!height ? { height: height } : {}}>
      <div className="bar backslash" />
      <div className="bar forwardslash" />
    </div>
  );
};

export default CloseIcon;
