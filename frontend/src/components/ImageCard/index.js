import "./ImageCard.css";
const ImageCard = ({ image }) => {
  return (
    <div className="image-card-container">
      <div className="image-card-body">
        <img src="/images/background-1.jpeg" className="card-image" />
      </div>
    </div>
  );
};

export default ImageCard;
