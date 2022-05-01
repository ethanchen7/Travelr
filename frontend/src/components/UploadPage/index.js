import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as imageActions from "../../store/image";
import "./UploadPage.css";

const UploadPage = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.user);
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userId: session.id,
      image,
      tag,
    };
    dispatch(imageActions.uploadImage(data));
  };
  return (
    <div className="upload-container">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setImage(e.target.value)} />
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
