import "./UserPageHeader.css";

const UserPageHeader = ({ details }) => {
  return (
    <div className="user-page-header-container">
      <div className="user-page-cover-photo">
        <img src="/images/background-1.jpeg" />
        <div className="user-information">
          <div className="user-profile">
            <div className="user-profile-icon-container"></div>
            <div className="user-profile-text-container">
              <h3 className="user-profile-title">{details.fullName}</h3>
              <p className="user-profile-username">@ethanchen</p>
            </div>
          </div>
          <div className="user-details">
            <p>{`Occupation: ${details.occupation}`}</p>
            <p>{`Location: ${details.location}`}</p>
            <p>{`Favorite Destination: ${details.favoriteDestination}`}</p>
            <div>{`Bio: ${details.bio}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageHeader;
