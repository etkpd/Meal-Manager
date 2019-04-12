import React from 'react';
import { Link } from "react-router-dom";
import styles from './TopNagivation.module.scss';


const TopNagivation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.sitelogo}>Meal Manager</h1>
        <ul className={styles.nav}>
          <li className={styles.nav__item}>
            <Link to="/" className={styles.nav__link}>Home</Link>
 
            {/* <Link to={{pathname: router.location.pathname}}  className={styles.nav__link}>Home</Link> */}

          </li>
          <li className={styles.nav__item}>
            <Link to="/mealschedule" className={styles.nav__link}>Meal Schedule</Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/catalog" className={styles.nav__link}>Catalog</Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/pricelogger" className={styles.nav__link}>Price Logger</Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/recipes" className={styles.nav__link}>Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNagivation;