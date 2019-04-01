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
                author={recipes[i].author}
                title={recipes[i].title}
                image={recipes[i].image}
                ingredients={recipes[i].ingredients}
                directions={recipes[i].directions}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;