import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as imageActions from "../../store/image";
import "./UploadPage.css";

const UploadPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const session = useSelector((state) => state.session.user);
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId: session.id,
      image,
      tag,
    };

    dispatch(imageActions.uploadImage(data));
    history.push(`/users/${session.id}`);
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className="upload-container">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={uploadFile} />
        <input
          type="text"
          name="tag"
          value={tag}
          placeholder="Where was this photo taken?"
          onChange={(e) => setTag(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadPage;
