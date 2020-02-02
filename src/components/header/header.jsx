import React from 'react';
import PropTypes from 'prop-types';

import DropDown from './../quantity/dropdown';
import NavBar from './../navbar/navbar';

import './header.css';

export default function Header({ selectOptions, onOptionSelection }) {
  return (
    <nav className="navbar is-fixed-top" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          CoinMarketCap
        </div>
        <DropDown selectOptions={selectOptions} onOptionSelection={onOptionSelection}/>
        <div className="navbar-item">
          <div className="navbar-end">
            <NavBar/>
          </div>
        </div>
      </div>
    </nav>
  );
}

/**
 * Defines Proptype for the components
 * @method classless
 * @memberOf Header
 * @static
 */
Header.propTypes = {
  onOptionSelection: PropTypes.func,
  selectOptions: PropTypes.object,
};
