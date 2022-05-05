import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutClick = () => {
    dispatch(sessionActions.sessionLogout());
    history.push("/");
  };
  return (
    <button className="upload-btn" onClick={() => logoutClick()}>
      <i className="fa-solid fa-right-from-bracket fa-2xl"></i>
    </button>
  );
};

export default LogoutButton;
