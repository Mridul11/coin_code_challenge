import React from 'react';

import NavLink from './link';

export const NavBar = () => (
  <div className="navbar-item">
    <NavLink text='Home' item='/'/>
    <NavLink text='Liquidity' item='/liquidity'/>
  </div>
);

export default NavBar;
