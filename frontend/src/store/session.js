import { csrfFetch } from "./csrf";

const LOGIN = "session/LOGIN";
const LOGOUT = "session/LOGOUT";

const loginUser = (user) => {
  return {
    type: LOGIN,
    user,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

export const signUpUser = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(loginUser(data.user));
    return data.user;
  }
};

export const sessionLogin = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(loginUser(data.user));
    return data.user;
  }
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(loginUser(data.user));
  return response;
};

export const sessionLogout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(logoutUser());
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOGIN:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
    case LOGOUT:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
