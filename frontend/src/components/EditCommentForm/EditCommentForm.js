import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putComment } from "../../store/comment";
import "../LoginFormModal/LoginForm.css";

const EditCommentForm = ({ comment, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const session = useSelector((state) => state.session.user);
  const [text, setText] = useState(comment.text);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validationErrors.length) {
      const payload = {
        userId: session.id,
        imageId: comment.imageId,
        commentId: comment.id,
        text,
      };

      dispatch(putComment(payload));
      setShowModal(false);
    }
  };

  useEffect(() => {
    const errors = [];

    if (!text) errors.push("Gotta write something in your comment!");
    if (text.length > 300)
      errors.push(
        "We know you have a lot on your mind, but let's keep the comment 300 characters or less please!"
      );

    setValidationErrors(errors);
  }, [text]);

  return (
    <div className="container">
      <div className="form-header">
        <div className="form-logo">
          <img src="/images/travelrblack.png" alt="logo" />
        </div>
        <div className="form-header-text">Edit your comment</div>
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
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditCommentForm;
