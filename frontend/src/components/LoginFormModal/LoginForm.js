import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import DemoUserButton from "../DemoUserButton";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationErrors([]);
    const user = {
      credential,
      password,
    };
    return dispatch(sessionActions.sessionLogin(user)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setValidationErrors(data.errors);
    });
  };

  return (
    <div className="container">
      <div className="form-header">
        <div className="form-logo">
          <img src="/images/travelrblack.png" alt="logo" />
        </div>
        <div className="form-header-text">Log in to Travelr</div>
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
            className="form-input"
            name="credential"
            type="text"
            value={credential}
            required
            placeholder="Email Address or Username"
            onChange={(e) => setCredential(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="password"
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button className="submitBtn" type="submit">
          Log In
        </button>
      </form>
      <DemoUserButton />
      <div className="line-break"></div>
    </div>
  );
};

export default LoginForm;
