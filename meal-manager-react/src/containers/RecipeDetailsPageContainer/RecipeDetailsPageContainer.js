import React from "react";
import {connect} from "react-redux";
import stylesRecipeEditor from "./RecipeDetailsPageContainer.module.scss";
import NutritionFactsRecipe from '../../components/Table/NutritionFactsRecipe/NutritionFactsRecipe';
import UnorderedList from "../../components/List2/UnorderedList/UnorderedList";
import OrderedList from "../../components/List2/OrderedList/OrderedList";

class RecipeDetailsPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  componentDidMount() {
  } 
  
  render() {
    return (
    <>
      <div className={stylesRecipeEditor.page}>
        <div className={stylesRecipeEditor.SectionEditRecipeButton}>

        </div>
        <div className={stylesRecipeEditor.SectionTitle}>
          <h1 className={stylesRecipeEditor.title}>{this.props.title}</h1>
        </div>
        <div className={stylesRecipeEditor.SectionUploadPhoto}>
          <img  
            className={stylesRecipeEditor.image}
            src={this.props.photo.highres} 
            alt="recipe" 
            height='400'/>
        </div>
        <div className={stylesRecipeEditor.SubSectionDuration}>
          <h4>
            Prep Time:
            <span className={stylesRecipeEditor.time}>{this.props.prep_time_hr}</span> 
            h
            <span className={stylesRecipeEditor.time}>{this.props.prep_time_min}</span>
            min
          </h4>

          <h4>
            Cook Time: 
            <span className={stylesRecipeEditor.time}>{this.props.cook_time_hr}</span> 
            h
            <span className={stylesRecipeEditor.time}>{this.props.cook_time_min}</span> 
            min
          </h4>
        </div>      
        <div className={stylesRecipeEditor.SectionSecond}>
          <div className={stylesRecipeEditor.SubSectionIngredients}>
            <h2>Ingredients</h2>
            {
              this.props.ingredients_text.map((ingredient)=>{
                return(
                  <UnorderedList
                    ingredient={ingredient}
                  /> 
                )
              })
            }
          </div>
        </div>
        <div className={stylesRecipeEditor.SectionDirections}>
          <h2>Directions</h2>   
          {
            this.props.directions.map((direction,index,directions)=>{
              return(
                <OrderedList
                  indexOfListItem={index}
                  isLastItem={index===directions.length-1}
                  isFirstItem={index===0}
                  text={direction}
                />
              )
            })
          }
        </div>
        <div className={stylesRecipeEditor.SectionNutritionLabel}>
          <NutritionFactsRecipe
            {...this.props.nutritionDetails}
            title={this.props.title}
            total_servings={this.props.total_servings}
            calories_per_serving={this.props.calories_per_serving}
          />
        </div>
      </div>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) =>({
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailsPageContainer);