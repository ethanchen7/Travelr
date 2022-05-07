import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putImage } from "../../store/image";
import "../LoginFormModal/LoginForm.css";

const EditImageForm = ({ image, setShowModal }) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.user);
  const [tags, setTags] = useState(image.tags);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = [];

    let tagsArray = tags;
    if (tags.length) {
      tagsArray = tags.toLowerCase().split(",");
      // tagsArray = tagsArray.map((tag) => tag.replace(/\s+/g, ""));
      tagsArray = tagsArray.join(",");
    }
    const payload = {
      userId: session.id,
      imageId: image.id,
      imageUrl: image.imageUrl,
      tags: tagsArray,
    };

    dispatch(putImage(payload));
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="form-header">
        <div className="form-logo">
          <img src="/images/travelrblack.png" alt="logo" />
        </div>
        <div className="edit-form-header-text">
          <p>Edit your image's tags</p>
          <p>(separated by commas e.g. "paris,france")</p>
        </div>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="edit-input-container">
          <input
            className="form-input"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button className="submitBtn uploadImg-btn" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditImageForm;
