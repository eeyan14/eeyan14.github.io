import React from 'react';
import '../styles/components/expandIcon.css';

const ExpandIcon = (props) => {
  const {
    expanded, // boolean
    lineLength, // string: length of line (e.g. "3px" or "90%") - default is "100%"
  } = props;

  return (
    <div className="expand-container">
      <div className={`expand-icon ${expanded ? "expanded" : ""}`}  style={!!lineLength ? { height: lineLength } : {}}>
        <div className="bar vertical" />
        <div className="bar horizontal" />
      </div>
    </div>
  )
}

export default ExpandIcon;