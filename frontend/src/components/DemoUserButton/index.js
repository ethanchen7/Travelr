import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const DemoUserButton = () => {
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    const credential = "demo-lition";
    const password = "password";
    return dispatch(
      sessionActions.sessionLogin({ credential, password })
    ).catch(async (res) => {
      await res.json();
    });
  };
  return (
    <button className="demo-user-btn" onClick={demoLogin}>
      Demo User
    </button>
  );
};

export default DemoUserButton;
