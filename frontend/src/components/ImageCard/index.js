import React, { useState } from "react";
import "./ImageCard.css";
const ImageCard = ({ imageUrl, imageType }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const imgElement = React.useRef(null);

  const handleLoad = (ele) => {
    setWidth(ele.current.naturalHeight);
    setHeight(ele.current.naturalWidth);
  };
  return (
    <div
      className={`gallery-container w-${Math.floor(width / 400)} h-${Math.floor(
        height / 400
      )}`}
    >
      <div className="gallery-item">
        <div className="image">
          <img
            src={`${imageUrl}`}
            alt={`${imageType}`}
            ref={imgElement}
            onLoad={() => handleLoad(imgElement)}
          />
        </div>
        <div className="text">{`${imageType}`}</div>
      </div>
    </div>
  );
};

export default ImageCard;
