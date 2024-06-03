import PropTypes from "prop-types";
import { Link } from "react-router-dom";

LogoButton.propTypes = {
  linkTo: PropTypes.string.isRequired,
};

export default function LogoButton({ linkTo }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to={linkTo}>
        <img style={{ width: "220px" }} src="logo.png" />
      </Link>
    </div>
  );
}
