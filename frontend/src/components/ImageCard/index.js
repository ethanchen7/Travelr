import "./ImageCard.css";
const ImageCard = ({ imageType }) => {
  return (
    <div className="gallery-container">
      <div className="gallery-item">
        <div className="image">
          <img
            src={`https://source.unsplash.com/1600x900/?${imageType}`}
            alt={`${imageType}`}
          />
        </div>
        <div className="text">{`${imageType}`}</div>
      </div>
    </div>
  );
};

export default ImageCard;
