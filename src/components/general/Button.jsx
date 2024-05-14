import { NavLink } from "react-router-dom";
import styles from "../Homepage/Homepage.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  class_name: PropTypes.string.isRequired,
  navLinkTo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Button({ class_name, navLinkTo, children }) {
  return (
    <NavLink to={navLinkTo}>
      <button className={styles[class_name]}>{children}</button>
    </NavLink>
  );
}
