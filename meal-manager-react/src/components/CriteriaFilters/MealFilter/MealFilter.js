import React, { Component } from 'react';
import styles from "./MealFilter.module.scss";

class MealFilter extends Component {
  render() {
    return (
      <div className={styles.mealfiltercontainer}>
        <button><h4>Meal</h4></button>
        <input type="checkbox"></input><label>BreakFast</label>
        <input type="checkbox"></input><label>Lunch</label>
        <input type="checkbox"></input><label>Dinner</label>
        <input type="checkbox"></input><label>Dessert</label>
        <button><h4>Ingredient (Meat)</h4></button>
        <button><h4>Ingredient (Vegetable)</h4></button>
        <button><h4>Ingredient (Grain)</h4></button>
      </div>
    );
  }
}

export default MealFilter;