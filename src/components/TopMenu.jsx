import React from 'react';
import { Link } from 'react-router-dom';
import style from '../css/TopMenu.scss';

const TopMenu = () => (
  <div className={style.topMenu}>
    <ul>
      <li className={style.logo}><Link to="/">DispelTV</Link></li>
      <li><Link to="/">main</Link></li>
      <li><Link to="/">test</Link></li>
    </ul>
  </div>
);

export default TopMenu;
