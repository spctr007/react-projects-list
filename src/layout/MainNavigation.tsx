import {Link} from "react-router-dom";
import React from "react";
import navStyles from './MainNavigation.module.css';

export default function MainNavigation() {

  return (
    <header className={navStyles.header}>
      <div className={navStyles.logo}>React Projects</div>
      <ul>
        <li>
          <Link to="/">All Projects</Link>
        </li>
        <li>
          <Link to="/new-project">Add New Project</Link>
        </li>
      </ul>
    </header>
  );
}