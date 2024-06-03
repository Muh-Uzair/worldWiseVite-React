import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const styles_obj = {
  backgroundColor: "#00c46a",
  padding: "12px 20px",
  borderRadius: "5px",
  color: "#242a2e",
  fontWeight: "700",
  border: "none",
  cursor: "pointer",
};

LogInButton.propTypes = {
  navLinkTo: PropTypes.string,
  typeBtn: PropTypes.string,
};

export default function LogInButton({ navLinkTo, typeBtn }) {
  return (
    <NavLink to={navLinkTo}>
      <button style={styles_obj} type={`${typeBtn}`}>
        LOG IN
      </button>
    </NavLink>
  );
}
