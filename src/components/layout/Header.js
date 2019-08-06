import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ branding }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav nav-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add/contact">
                <i className="fas fa-plus" />
                Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My Contact App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
