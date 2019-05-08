import React from "react";
import CardList from '../../components/cards/CardList/CardList';
import queryString from 'query-string'

//import styles from './RecipeCardsContainer.module.scss'

class RecipeCardsContainer extends React.Component {
  state = {
    initial_mount: true, 
    searchobject: []
  };
 
  componentDidMount() {
    //console.log('mount')
  }
  componentDidUpdate(){
   // this.setState({ initial_mount: false })
    console.log('RecipeCardsContainer updated')

  }

  /*
  componentWillReceiveProps(){
  }
 */


  updateQueryblue = () =>{
    
    this.props.history.push({
      pathname: this.props.match.path,
      search: '?color=blue'
    }) 
  }

  updateQueryorange = () =>{
    const combined = this.props.location.pathname + this.props.location.search;
    
    console.log(`${this.props.location.pathname} + ${this.props.location.search}  = ${combined}`);

    this.props.history.push({
      pathname: this.props.match.path,
      search: `${this.props.location.search}AZ12color=orange`
    }) 
  }

  updateQueryred = () =>{
    const striing = queryString.stringify({grain: ['rice','pasta', 'bread'], meat: ['chicken'], vegetable: ['spinach', 'brussel sprouts']});
    console.log(striing);

    this.props.history.push({
      pathname: this.props.match.path,
      search: striing
    }) 

    const anobject=queryString.parse(striing);
    console.log(anobject);
    const dissectanobject = anobject.grain
    console.log(dissectanobject); 
  }

  render() {
 

    return (
    <>
      
      <button onClick={this.updateQueryblue}>?color=blue </button>
      <button onClick={this.updateQueryorange}>?color=orange </button>
      <button onClick={this.updateQueryred}>?color=red</button>
    

      <CardList 
        recipes={this.props.recipes}
      />
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