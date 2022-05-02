import "./UserPageHeader.css";

const UserPageHeader = () => {
  return (
    <div className="user-page-header-container">
      <div className="user-page-cover-photo"></div>{" "}
      {/*img? first photo of User*/}
      <div className="user-information">
        <div className="user-profile">
          <div className="user-profile-icon-container"></div> {/*img?*/}
          <div className="user-profile-text-container">
            <h3 className="user-profile-title">Ethan Chen</h3>
            <p className="user-profile-username">@ethanchen</p>
          </div>
        </div>
        <div className="user-details">
          <p>Occupation: Software Engineer</p>
          <p>Location: Los Angeles, CA</p>
          <p>Favorite Destination: Taipei, Taiwan</p>
          <p>Bio: I'm an avid traveler</p>
        </div>
      </div>
    </div>
  );
};

export default UserPageHeader;
