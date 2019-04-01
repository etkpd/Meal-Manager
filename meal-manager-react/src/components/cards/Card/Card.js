import React from 'react';
import styles from './Card.module.scss';


const Card = ({ author, title, image, directions, ingredients }) => {
  return (
    <div className={styles.card}>
      
      <div>
      <img src="pic_trulli.jpg" alt="Italian Trulli"></img>
        <h4>{title}</h4>
        <h5>Ingredients</h5>
        {
         ingredients.map((ingredient, i) => {
          return (
            <>
              <p>{ingredient}</p>
            </>
          );
         })
        }
        {/* <h3>Directions</h3>
        {
         directions.map((direction, i) => {
          return (
            <>
              <h4>{i+1}</h4>
              <p>{direction}</p>
            </>
          );
         })
        } */}
      </div>
    
    </div>
  );
}

export default Card;