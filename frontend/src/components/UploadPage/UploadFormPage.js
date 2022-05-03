import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as imageActions from "../../store/image";
import "../LoginFormModal/LoginForm.css";

const UploadPage = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const session = useSelector((state) => state.session.user);
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId: session.id,
      image,
      tag,
    };

    dispatch(imageActions.uploadImage(data));
    history.push("/");
    // history.push(`/users/${session.id}`);
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
        <div className="form-header-text">Upload your memory</div>
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
            name="tag"
            value={tag}
            placeholder='Add tags! e.g. "paris, france, europe" (optional)'
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <button className="submitBtn uploadImg-btn" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPage;