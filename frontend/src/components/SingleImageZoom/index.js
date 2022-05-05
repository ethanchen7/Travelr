import "./SingleImageZoom.css";

const SingleImageZoom = ({ image }) => {
  return (
    <div className="image-zoom-container">
      <img src={`${image.imageUrl}`} alt={`${image.tags[0]}`}></img>
      <div className="image-footer-container">
        <span>{`@${image.User.username} `}</span>
        <span>{` ${image.tags.join(", ").toUpperCase()}`}</span>
      </div>
    </div>
  );
};

export default SingleImageZoom;
