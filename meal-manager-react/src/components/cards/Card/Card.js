import React from 'react';
import styles from './Card.module.scss';
import meal_picture from "./toast.jpg";


const Card = ({ author, title, image, directions, ingredients, calories_per_serving, total_servings,full_cook_time }) => {
  return (
    <div className={styles.card}>
     <div>
        <img src={`${meal_picture}`} alt="Italian Trulli"></img>
        <h4>{title}</h4>
        <p>{calories_per_serving}</p>
        <p>{total_servings}</p>
        <p>{full_cook_time}</p>
      </div>
    </div>
  );
}

export default Card;