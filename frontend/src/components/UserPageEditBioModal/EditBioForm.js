import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putProfileDetails } from "../../store/profile";
import "./EditBioForm.css";
import "../LoginFormModal/LoginForm.css";

const EditBioForm = ({ setShowModal, details }) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.user);
  const [fullName, setFullName] = useState(details.fullName || "");
  const [image, setImage] = useState(null);
  const [occupation, setOccupation] = useState(details.occupation || "");
  const [location, setLocation] = useState(details.location || "");
  const [favoriteDestination, setFavoriteDestination] = useState(
    details.favoriteDestination || ""
  );
  const [bio, setBio] = useState(details.bio || "");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validationErrors.length) {
      let profilePic;
      if (!image) profilePic = details.profilePic;

      const payload = {
        userId: session.id,
        fullName,
        image,
        profilePic,
        location,
        favoriteDestination,
        occupation,
        bio,
      };

      dispatch(putProfileDetails(payload));
      setShowModal(false);
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  useEffect(() => {
    const errors = [];
    if (fullName && fullName.length > 150)
      errors.push(
        "Please abbreviate your name to 150 characters or less, sorry!"
      );
    if (location && location.length > 140)
      errors.push("Location can't be greater than 200 characters.");
    if (favoriteDestination && favoriteDestination.length > 200)
      errors.push("Favorite Destination can't be greater than 200 characters.");
    if (occupation && occupation.length > 100)
      errors.push(
        "Occupation is a bit lengthy, could you please abbreviate it to 100 characters or less?"
      );
    if (bio && bio.length > 500)
      errors.push(
        "We'd love to hear more about you, but we have to keep the bio at 500 characters or less for now. Sorry!"
      );

    setValidationErrors(errors);
  }, [fullName, location, favoriteDestination, occupation, bio]);

  return (
    <div className="container">
      <div className="form-header">
        <div className="form-logo">
          <img src="/images/travelrblack.png" alt="logo" />
        </div>
        <div className="form-header-text">Edit your bio</div>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <ul className="errors-container">
          {validationErrors &&
            validationErrors.map((err, i) => (
              <li className="error" key={i}>
                {err}
              </li>
            ))}
        </ul>
        <div className="input-container">
          <label htmlFor="file">Profile Pic</label>
          <input
            className="form-input file-input"
            type="file"
            onChange={uploadFile}
          />
        </div>
        <div className="input-container">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="form-input"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="occupation">Occupation</label>
          <input
            className="form-input"
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="location">Location</label>
          <input
            className="form-input"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="destination">Favorite Destination</label>
          <input
            className="form-input"
            type="text"
            value={favoriteDestination}
            onChange={(e) => setFavoriteDestination(e.target.value)}
          />
        </div>
        <div className="bio-container">
          <label htmlFor="bio">Bio</label>
          <textarea
            className="bio-edit"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <button className="submitBtn uploadImg-btn" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditBioForm;
