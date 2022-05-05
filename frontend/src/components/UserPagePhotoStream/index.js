import ImageCard from "../ImageCard";
import UploadFormModal from "../UploadPage";

const UserPagePhotoStream = ({ imageObjects, sessionUser, userPageId }) => {
  return (
    <>
      {imageObjects.length ? (
        <div className="inner-container">
          {imageObjects?.map((img) => (
            <ImageCard key={img.id} image={img} />
          ))}
        </div>
      ) : (
        <div className="empty-photo-container">
          <img src="/images/travelrblack.png" />
          {sessionUser.id === parseInt(userPageId) ? (
            <>
              <h1>Oops, looks like you don't have any photos yet.</h1>
              <h3>Upload some of your memories!</h3>
              <UploadFormModal option={"black"} />
            </>
          ) : (
            <>
              <h1>Oops, looks like this user doesn't have any photos yet.</h1>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserPagePhotoStream;
