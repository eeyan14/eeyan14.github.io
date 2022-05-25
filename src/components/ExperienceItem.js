import React, { useState } from 'react';
import '../styles/experience.css';
import plusIcon from '../assets/plus_icon.png';

function ExperienceItem(props) {
  const [hover, setHover] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const item = props.item
  const isLast = props.isLast
  const canExpand = ["job", "project"].includes(item.category)

  return (
    <div className={`exp-item ${isLast ? "last" : ""}`}>
      <div className="timeline">
        {canExpand ? (
          <button
            className={`circle ${item.category}`}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setExpanded(!expanded)}
          >
            {hover && (
              <img
                src={plusIcon}
                className={`plus ${expanded ? "rotate" : ""}`}
                alt="Expand"
              />
            )}
          </button>
        ) : (
          <div className={`circle ${item.category}`} />
        )}

        <div className="line" />
      </div>

      <div className="content">
        <p className="title">{item.title}</p>
        {item.subtitle && (
          <p className="subtitle">{item.subtitle}</p>
        )}

        {expanded && (
          <ul className="details">
            {item.description.map((point, i) => {
              return (
                <li key={i}>{point}</li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
