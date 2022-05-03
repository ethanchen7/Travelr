import React, { useState } from "react";
import FavoriteButton from "../FavoriteButton";
import "./ImageCard.css";

const ImageCard = ({ image, explorePage }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const imgElement = React.useRef(null);

  const handleLoad = (ele) => {
    setWidth(ele.current.naturalHeight);
    setHeight(ele.current.naturalWidth);
  };
  const tagString = image.tags.join(", ").toUpperCase();
  return (
    <div
      className={`gallery-container w-${Math.floor(width / 400)} h-${Math.floor(
        height / 400
      )}`}
    >
      <div className="gallery-item">
        <div className="image">
          <img
            src={`${image.imageUrl}`}
            alt="image"
            ref={imgElement}
            onLoad={() => handleLoad(imgElement)}
          />
        </div>
        {explorePage ? (
          <div className="favorite-button-container">
            <FavoriteButton image={image} />
          </div>
        ) : (
          ""
        )}
        <div className="text">
          <p>{tagString}</p>
          <p>{`@${image.User.username}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
