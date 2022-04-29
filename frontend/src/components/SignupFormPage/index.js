import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import "./SignupForm.css";

const SignupFormPage = () => {
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
    if (password === confirmPassword) {
      setValidationErrors([]);
      const user = {
        username,
        email,
        password,
      };
      return dispatch(sessionActions.signUpUser(user)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors);
      });
    } else {
      return setValidationErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
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
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div>
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupFormPage;
