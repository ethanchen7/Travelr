import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import "../LoginFormModal/LoginForm.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationErrors([]);
    if (password === confirmPassword) {
      const user = {
        username,
        email,
        password,
      };
      return dispatch(sessionActions.signUpUser(user)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors);
      });
    }
    return setValidationErrors(["Confirm password field must match password."]);
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
            name="username"
            type="text"
            value={username}
            placeholder="Enter a username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="email"
            type="text"
            value={email}
            placeholder="Enter an email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="password"
            type="password"
            value={password}
            placeholder="Enter a password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <button className="signupBtn" type="submit">
          Sign Up
        </button>
      </form>
      {/* <div className="line-break"></div> */}
    </div>
  );
};

export default SignUpForm;
