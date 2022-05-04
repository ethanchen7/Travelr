import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FavoriteButton from "../FavoriteButton";
import "./ImageCard.css";

const ImageCard = ({ image, explorePage }) => {
  const history = useHistory();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const imgElement = React.useRef(null);

  const handleLoad = (ele) => {
    setWidth(ele.current.naturalHeight);
    setHeight(ele.current.naturalWidth);
  };

  const routeChange = () => {
    let path = `/image/${image.id}`;
    history.push(path);
  };

  const tagString = image.tags.join(", ").toUpperCase();
  return (
    <div
      className={`gallery-container w-${Math.floor(width / 400)} h-${Math.floor(
        height / 400
      )}`}
    >
      <div className="gallery-item">
        <div className="image" onClick={routeChange}>
          <img
            src={`${image.imageUrl}`}
            alt="gallery-img"
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
          <p>{`@${image.User?.username}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
