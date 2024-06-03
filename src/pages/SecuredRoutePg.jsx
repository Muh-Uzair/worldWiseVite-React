import { useContext, useEffect } from "react";
import { AuthnContextC } from "../../AuthnContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

SecuredRoutePg.propTypes = {
  children: PropTypes.object,
};

export default function SecuredRoutePg({ children }) {
  const { isAuthenticated } = useContext(AuthnContextC);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated]
  );
  return isAuthenticated ? children : null;
}
