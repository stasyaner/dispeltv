import React from 'react';
import topmenu from '../css/TopMenu.scss';

const TopMenu = () => (
  <ul className="top-menu">
    <li><span className={topmenu.logo}>DispelTV</span></li>
    <li>Main</li>
  </ul>
);

export default TopMenu;
