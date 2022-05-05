import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putProfileDetails } from "../../store/profile";
import "./EditBioForm.css";
import "../LoginFormModal/LoginForm.css";

const EditBioForm = ({ setShowModal, details }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const session = useSelector((state) => state.session.user);
  const [fullName, setFullName] = useState(details.fullName);
  const [image, setImage] = useState(null);
  const [occupation, setOccupation] = useState(details.occupation);
  const [location, setLocation] = useState(details.location);
  const [favoriteDestination, setFavoriteDestination] = useState(
    details.favoriteDestination
  );
  const [bio, setBio] = useState(details.bio);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = [];

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
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

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
          <input
            className="form-input file-input"
            type="file"
            onChange={uploadFile}
          />
        </div>
        <div className="input-container">
          <input
            className="form-input"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            className="form-input"
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            className="form-input"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            className="form-input"
            type="text"
            value={favoriteDestination}
            onChange={(e) => setFavoriteDestination(e.target.value)}
          />
        </div>
        <div className="bio-container">
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
