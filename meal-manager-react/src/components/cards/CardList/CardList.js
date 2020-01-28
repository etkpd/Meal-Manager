import React from 'react';
import Card from '../Card/Card';
import styles from "./CardList.module.scss"

const CardList = ({ recipes }) => {

  return (
    <div className={styles.CardListcontainer}>
        {
        recipes.map((recipe, i) => {
          return (
              <Card
                key={i}
                recipeNumber={recipe.recipeNumber}
                title={recipe.title}
                image={recipe.photo.thumb}
                calories_per_serving={recipe.calories_per_serving}
                total_servings={recipe.total_servings}
                cook_time_hr={recipe.cook_time_hr}
                cook_time_min={recipe.cook_time_min}
                prep_time_hr={recipe.prep_time_hr}
                prep_time_min={recipe.prep_time_min}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;