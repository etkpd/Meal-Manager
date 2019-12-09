import React from "react";
import CardList from '../../components/cards/CardList/CardList';
import queryString from 'query-string'

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
    const striing = queryString.stringify({
      "beef": queryString.stringify({
        'OR':['top round steak']
      },{arrayFormat: 'comma'}),
      'vegetable': queryString.stringify({
        'AND': ['onion','carrot','spinach','avocado','lettuce'],
        'NOT':['celery'],
        'OR':['beet','cremini mushrooms']
      },{arrayFormat: 'comma'}),
      'spice':  queryString.stringify({
        'NOT':['sugar'],
        'OR':['black pepper']
      },{arrayFormat: 'comma'})
    }, 
    {arrayFormat: 'comma'});
     
     
     console.log('striing', striing);
    const striingPar = queryString.parse(striing);
    console.log('striingPar', striingPar)
    const striingParVeg = queryString.parse(striingPar.vegetable, {arrayFormat: 'comma'});
    console.log('striingParVeg', striingParVeg)
    for (const key in striingParVeg) {
      console.log(key, striingParVeg[key]);
    } 
    

    this.props.history.push({
      pathname: `/recipes/filter`,
      search: `${striing}`
    }) 

    /* const anobject=queryString.parse(striing);
    console.log(anobject);
    const dissectanobject = anobject.grain
    console.log(dissectanobject);  */
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


export default RecipesCardsContainer;