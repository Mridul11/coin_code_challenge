import React from 'react';
import PropTypes from 'prop-types';

import './dropdown.css';

export default function DropDown({ selectOptions, onOptionSelection }) {
  return (
    <div className="navbar-item">
      <div className="dropdown is-right is-active">
        <select className="pagination-select" onChange={onOptionSelection}>
          {
            selectOptions.options.map((option, idx) => <option key={idx} value={option.key}>{ option.value }</option>)
          }
        </select>
      </div>
    </div>
  );
}

DropDown.propTypes = {
  onOptionSelection: PropTypes.func,
  selectOptions: PropTypes.object,
};
