import React from "react";
import CardList from '../../components/cards/CardList/CardList';
//import styles from './RecipesCardsContainer.module.scss'

class RecipesCardsContainer extends React.Component {
  state = {
    initial_mount: true, 
    searchobject: [],
    searchString: ''
  };
 
  componentDidMount() {
    //console.log('hi')
    //console.log(this.props.location.search)
  }
  componentDidUpdate(){
   // this.setState({ initial_mount: false })
    console.log('RecipesCardsContainer updated')
    console.log(this.state.searchString)
  }

 
  static getDerivedStateFromProps(nextProps, prevState){
    console.log(nextProps.location)
    return {
      searchString: nextProps.location.search
    }
  }

  render() {
    return (
      <CardList 
        recipes={this.props.recipes}
      />
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

export default RecipesCardsContainer;