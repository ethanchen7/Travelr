import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import "./SignUpForm.css";

const SignUpForm = () => {
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
    <form onSubmit={handleSubmit}>
      <ul className="errors-container">
        {validationErrors &&
          validationErrors.map((err, i) => (
            <li className="error" key={i}>
              {err}
            </li>
          ))}
      </ul>
      <div>
        <label>Email</label>
        <input
          name="credential"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default SignUpForm;
