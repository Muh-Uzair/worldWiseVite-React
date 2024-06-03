import { Link } from "react-router-dom";
import PropTypes from "prop-types";

LogoButton.propTypes = {
  linkTo: PropTypes.string.isRequired,
};

export default function LogoButton({ linkTo }) {
  return (
    <Link to={linkTo}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "220px" }} src="logo.png" />
      </div>
    </Link>
  );
}
