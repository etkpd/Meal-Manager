import React from "react";
import CardList from '../../components/cards/CardList/CardList';
//import styles from './RecipeCardsContainer.module.scss'

class RecipeCardsContainer extends React.Component {
  state = {
    initial_mount: true
  };
 
  componentDidMount() {
    console.log('mount')
  }
  componentDidUpdate(){
   // this.setState({ initial_mount: false })
    console.log('update')

  }

  /*
  componentWillReceiveProps(){
  }
 */


  updateQuery = () =>{
    this.props.history.push(`recipes/?event=true`) 
  }

  render() {
 

    return (
    <>
      
      <button onClick={this.updateQuery}>pull results for </button>

      {console.log(this.props)}

     {/*  {(this.props.recipes.length )
            ? <CardList 
                recipes={this.props.recipes}
              />
            : 'No Recipes yet. Wait one second.'
      } */}
      

    
      
      
    </>
    );
  }
}

/* function mapStateToProps(state) {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
 */


export default RecipeCardsContainer;