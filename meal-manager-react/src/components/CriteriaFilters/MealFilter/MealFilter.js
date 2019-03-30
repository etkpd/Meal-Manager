import React, { Component } from 'react';

class MealFilter extends Component {
  render() {
    return (
      <>
        <h1>Meal   </h1><h1>+</h1>
        <input type="checkbox"></input><label>BreakFast</label>
        <input type="checkbox"></input><label>Lunch</label>
        <input type="checkbox"></input><label>Dinner</label>
        <input type="checkbox"></input><label>Dessert</label>
        <h1>Ingredient (Meat)</h1> <h1>+</h1>
        <h1>Ingredient  </h1> <h1>+</h1>

      </>

    );
  }
}

export default MealFilter;