import React, { Component } from 'react';

class MealFilter extends Component {
  render() {
    return (
      <>
        <h4>Meal   </h4><h4>+</h4>
        <input type="checkbox"></input><label>BreakFast</label>
        <input type="checkbox"></input><label>Lunch</label>
        <input type="checkbox"></input><label>Dinner</label>
        <input type="checkbox"></input><label>Dessert</label>
        <h4>Ingredient (Meat)</h4> <h4>+</h4>
        <h4>Ingredient  </h4> <h4>+</h4>

      </>

    );
  }
}

export default MealFilter;