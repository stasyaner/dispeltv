import React from 'react';
import { Link } from 'react-router-dom';
import style from '../css/TopMenu.scss';

const TopMenu = () => (
  <div className={style.topMenu}>
    <ul>
      <li className={style.logo}><Link to="/">DispelTV</Link></li>
      <li>
        <form className={style.search}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="search in diff lang"
          />
          <button
            className={style.searchButton}
            type="submit"
          ><span className={style.glyphSearch12}>&nbsp;</span></button>
        </form>
      </li>
    </ul>
  </div>
);

export default TopMenu;
