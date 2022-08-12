import React, { useRef, useState } from "react";
import CloseIcon from "./CloseIcon";
import "../styles/components/expandableImage.css";

const ExpandableImage = (props) => {
  const {
    altText, // string: image alt text
    description, // string: image longer description
    height, // string: image height
    image, // string: image url
  } = props;

  const [expanded, setExpanded] = useState(false);
  const modalRef = useRef(null);

  const maybeCloseModal = (event) => {
    const clicked = !modalRef.current?.contains(event.target);
    if (expanded && !!modalRef.current && clicked) {
      // user clicked outside modal, close modal
      setExpanded(false);
    }
  };

  return (
    <div className="expandable-image">
      {expanded && (
        <div className="image-modal-wrapper" onClick={maybeCloseModal}>
          <div className="image-modal" ref={modalRef}>
            <button
              className="close"
              aria-label="Close"
              onClick={() => setExpanded(false)}
            >
              <CloseIcon height="24px" />
            </button>
            <img src={image} alt={altText} />
            {(!!description || !!altText) && (
              <p className="image-desc">
                {!!description ? description : altText}
              </p>
            )}
          </div>
        </div>
      )}

      <button className="image-button" onClick={() => setExpanded(!expanded)}>
        <img src={image} alt={altText} style={{ height: height }} />
      </button>
    </div>
  );
};

export default ExpandableImage;
