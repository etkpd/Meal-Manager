import React from 'react';
import { Link } from "react-router-dom";
import styles from './Card.module.scss';

import {ReactComponent as CaloriesIconSVG} from './CaloriesIcon.svg'
import {ReactComponent as ServingsIconSVG} from './ServingsIcon.svg'
import {ReactComponent as CookTimeIconSVG} from './CookTimeIcon.svg'

const Card = ({ recipeNumber, title, image, calories_per_serving, total_servings, cook_time_hr, cook_time_min, prep_time_hr, prep_time_min }) => {
  return (
      <div className={styles.card}>
    <Link to={`/recipe/${recipeNumber}`} className={styles.link}>
        <div className={styles.items}>
          <img src={`${image}`} alt="Italian Trulli"></img>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.details}>
            <div className={styles.detail}>
              <CaloriesIconSVG/>
              <p className={styles.text}>{Math.round(calories_per_serving)} calories per svg</p>
            </div>
            <div className={styles.detail}>
              <ServingsIconSVG/>
              <p className={styles.text}>{total_servings} servings</p>
            </div>
            <div className={styles.detail}>
              <CookTimeIconSVG/>
              <p className={styles.text}>Prep: {prep_time_hr*60 + prep_time_min} min. Cook: {cook_time_hr*60 + cook_time_min} min.</p>
            </div>
          </div>
        </div>
    </Link>
      </div>
  );
}

export default Card;