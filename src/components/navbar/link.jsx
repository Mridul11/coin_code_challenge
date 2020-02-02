import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavLink = ({ text, item }) => (
  <div className="navbar-item">
    <Link to={`${item}`}>{text}</Link>
  </div>
);

NavLink.propTypes = {
  item: PropTypes.string,
  text: PropTypes.string,
};

export default NavLink;
