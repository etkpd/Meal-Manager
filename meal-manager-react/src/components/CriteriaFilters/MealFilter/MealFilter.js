import React, { Component } from 'react';
import styles from "./MealFilter.module.scss";

class MealFilter extends Component {
  render() {
    return (
      <div className={styles.mealfiltercontainer}>
        <button><h3>Meal</h3></button>
        <div className={styles.filterinputs}>
          <label className={styles.filterinput}>
            <input type="checkbox"></input>
            <span className={styles.checkmark}></span>
            BreakFast
          </label>
          <label className={styles.filterinput}>
            <input type="checkbox"></input>
            <span className={styles.checkmark}></span>
            Lunch
          </label>
          <label className={styles.filterinput}>
            <input type="checkbox"></input>
            <span className={styles.checkmark}></span>
            Dinner
          </label>
          <label className={styles.filterinput}>
            <input type="checkbox"></input>
            <span className={styles.checkmark}></span>
            Dessert
          </label>
        </div>
        <button><h3>Ingredient (Meat)</h3></button>
          <div className={styles.filterinputs}>
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              beef
            </label>
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              pork
            </label>
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              chicken
            </label>   
          </div>
        <button><h3>Ingredient (Vegetable)</h3></button>
          <div className={styles.filterinputs}>
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              spinach
            </label>         
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              red beet
            </label>
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              carrot
            </label> 
          </div>
        <button><h3>Ingredient (Grain)</h3></button>
          <div className={styles.filterinputs}>
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              oats
            </label>
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              brown rice
            </label>
            <label className={styles.filterinput}>
              <input type="checkbox"></input>
              <span className={styles.checkmark}></span>
              whole grain pasta
            </label>
          </div>
      </div>
    );
  }
}

export default MealFilter;