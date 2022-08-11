import React, { useState } from 'react';
import '../styles/experience.css';
import ExpandIcon from './ExpandIcon';

function ExperienceItem(props) {
  const [hover, setHover] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const {
    item,
    isLast
  } = props
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
            <ExpandIcon expanded={expanded} lineLength="50%" />
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
            {item.description?.map((point, i) => {
              return (
                <li key={i}>{point}</li>
              )
            })}

            {item.images?.map((img, i) => {
              return (
                <img key={i} src={img} />
              )
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
