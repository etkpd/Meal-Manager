import React, { Component } from 'react';
import {connect} from "react-redux";
import {getRecipeNutritionDetails} from "../../reducers/recipe/recipe"
//eslint-disable-next-line
import NutritionFactsRecipeSubmission from '../../components/Table/NutritionFactsRecipeSubmission/NutritionFactsRecipeSubmission';

class NutritionFactsContainer extends Component {

  render() {
    const {food_name, recipeTitleName, numberOfServings, numberOfServingsName, handleChange, setFieldValue, nutritionDetails } = this.props
    return (
      <div>
       <NutritionFactsRecipeSubmission
        food_name={food_name}
        recipeTitleName={recipeTitleName}
        numberOfServings={numberOfServings}
        numberOfServingsName={numberOfServingsName}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
        {...nutritionDetails}
        isRecipe={true}
       />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) =>({
  nutritionDetails: getRecipeNutritionDetails(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NutritionFactsContainer);