import React from 'react';
import styles from './Card.module.scss';


const Card = ({ author, title, image, directions, ingredients }) => {
  return (
    <div className={styles.card}>
      
      <div>
        <h2>{title}</h2>
        <h3>Ingredients</h3>
        {
         ingredients.map((ingredient, i) => {
          return (
            <>
              <p>{ingredient}</p>
            </>
          );
         })
        }
        <h3>Directions</h3>
        {
         directions.map((direction, i) => {
          return (
            <>
              <h4>{i+1}</h4>
              <p>{direction}</p>
            </>
          );
         })
        }
      </div>
    </div>
  );
}

export default Card;