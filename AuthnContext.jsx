import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const AuthnContextC = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  logInStatus: "Initial",
};

function reducer(state, action) {
  switch (action.type) {
    case "loginSuccess":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logInFailed":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        logInStatus: "errorInLogIn",
      };
    case "logOut":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        logInStatus: "logOut",
      };
    default:
      throw new Error("Unknown action");
  }
}

AuthnContext.propTypes = {
  children: PropTypes.object,
};

function AuthnContext({ children }) {
  const [{ user, isAuthenticated, logInStatus }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const FAKE_USER = {
    name: "Jack",
    // email: "jack@example.com",
    email: "u",
    // password: "qwerty",
    password: "z",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

  function logIn(emailR, passwordR) {
    if (emailR === FAKE_USER.email && passwordR === FAKE_USER.password) {
      dispatch({ type: "loginSuccess", payload: FAKE_USER });
    }
    if (emailR !== FAKE_USER.email && passwordR !== FAKE_USER.password) {
      console.log(`wrong email or password`);
      dispatch({ type: "logInFailed" });
    }
  }

  function logOut() {
    dispatch({ type: "logOut" });
  }

  return (
    <AuthnContextC.Provider
      value={{
        logIn,
        isAuthenticated,
        user,
        logInStatus,
        logOut,
      }}
    >
      {children}
    </AuthnContextC.Provider>
  );
}

export { AuthnContext, AuthnContextC };
// nothing
