import { useContext, useEffect, useReducer } from "react";
import styles from "../LogIn/LogInCmp.module.css";
import { AuthnContextC } from "../../../AuthnContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "emailChange":
      return { ...state, email: action.payload };

    case "passwordChange":
      return { ...state, password: action.payload };

    default:
      throw new Error(`Unknown action performed`);
  }
}

export default function LogInCmp() {
  const [{ email, password }, dispatch] = useReducer(reducer, initialState);
  const { logIn, isAuthenticated } = useContext(AuthnContextC);
  const navigate = useNavigate();

  function logInFormSubmit(e) {
    e.preventDefault();
    if (email && password) {
      logIn(email, password);
    }
  }

  useEffect(() => {
    function navigateToAppLayout() {
      if (isAuthenticated) {
        navigate("/appLayout/cities", { replace: true });
      }
    }
    navigateToAppLayout();
  }, [isAuthenticated]);
  return (
    <form
      className={styles.formUserNamePassword}
      onSubmit={(e) => logInFormSubmit(e)}
    >
      <>
        <label>Email Address</label>
        <br />
        <input
          type="text"
          placeholder="example@gmail.com"
          onChange={(e) =>
            dispatch({ type: "emailChange", payload: e.target.value })
          }
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          style={{ marginBottom: "25px", letterSpacing: "3px" }}
          onChange={(e) =>
            dispatch({ type: "passwordChange", payload: e.target.value })
          }
        />
        <br />

        <button className={styles.logInBtn} type="submit">
          LOG IN
        </button>
      </>
    </form>
  );
}
