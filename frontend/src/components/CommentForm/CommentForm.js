import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../store/comment";
import "../LoginFormModal/LoginForm.css";

const CommentForm = ({ setShowModal, imageId }) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session.user);
  const [text, setText] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validationErrors.length) {
      const data = {
        userId: session.id,
        imageId,
        text,
      };

      dispatch(postComment(data));
      setShowModal(false);
    }
  };

  useEffect(() => {
    const errors = [];

    if (!text) errors.push("What are your thoughts? Don't be shy");
    if (text.length > 300)
      errors.push(
        "I know you have a lot of thoughts on your mind, but please keep your comment 300 characters or less please!"
      );

    setValidationErrors(errors);
  }, [text]);

  return (
    <div className="container">
      <div className="form-header">
        <div className="form-logo">
          <img src="/images/travelrblack.png" alt="logo" />
        </div>
        <div className="form-header-text">Upload your comment</div>
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
          <textarea
            className="form-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button className="submitBtn uploadImg-btn" type="submit">
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
