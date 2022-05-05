import EditBioModal from "../UserPageEditBioModal";
import "./UserPageHeader.css";

const UserPageHeader = ({ details }) => {
  return (
    <div className="user-page-header-container">
      <div className="user-page-cover-photo">
        <EditBioModal details={details} />
        <img src="/images/background-1.jpeg" />
        <div className="user-information">
          <div className="user-profile">
            <div className="user-profile-icon-container">
              {details.profilePic ? (
                <img src={`${details.profilePic}`} />
              ) : (
                <img className="default-pic" src="/images/defaultprofile.png" />
              )}
            </div>
            <div className="user-profile-text-container">
              <h3 className="user-profile-title">
                {details.fullName ? `${details.fullName}` : `New User`}
              </h3>
              <p className="user-profile-username">{`@${details.User.username}`}</p>
            </div>
          </div>
          <div className="user-details">
            <p>
              {details.occupation
                ? `Occupation: ${details.occupation}`
                : "Occupation: n/a"}
            </p>
            <p>
              {details.location
                ? `Location: ${details.location}`
                : "Location: n/a"}
            </p>
            <p>
              {details.favoriteDestination
                ? `Favorite Destination: ${details.favoriteDestination}`
                : "Favorite Destination: n/a"}
            </p>
            <div className="bio-text">
              Bio:
              <span>{details.bio ? `${details.bio}` : "n/a"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageHeader;
