import React from 'react';
import { connect } from 'react-redux';
import Checkbutton from './Checkbutton/Checkbutton';
import styles from './Checkbuttons.module.scss';
import { editRecipeCriteria } from '../../../actions/CriteriaActions'
//import queryString from 'query-string';

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      operation: new Map()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(){
    //decode url. extract items from relevant food category
    //update this.state.checkedItems to reflect newly updated url
  }

  handleChange(e) {
    // const category = this.props.title
    const food = e.target.name;
    //eslint-disable-next-line
    let conditional = ''
    //OR, AND, NOT, NONE
    //console.log(this.props.data)
    if(!this.state.operation.get(food)){
      conditional = 'OR'
      this.setState(prevState => ({ operation: prevState.operation.set(food, 'OR') }));
    } else if (this.state.operation.get(food) === 'OR'){
      conditional = 'AND'      
      this.setState(prevState => ({ operation: prevState.operation.set(food, 'AND') }));
    } else if (this.state.operation.get(food) === 'AND'){
      conditional = 'NOT'      
      this.setState(prevState => ({ operation: prevState.operation.set(food, 'NOT') }));
    } else if (this.state.operation.get(food) === 'NOT'){
      conditional = null      
      this.setState((prevState) => { 
        let operationMap = prevState.operation
        operationMap.delete(food)
        return {operation: operationMap}
      });
    }

    let criteriaObj = Object.create(null);
    for (let [k,v] of this.state.operation) {
      criteriaObj[k] = v;
    }
    criteriaObj[food] = conditional
    if(!conditional){
      delete criteriaObj[`${food}`]
    }

    let foodgroupCriteriaObject = Object.create(null)
    foodgroupCriteriaObject[this.props.foodGroup] = criteriaObj
    this.props.editRecipeCriteria(foodgroupCriteriaObject)
    this.props.onCriteriaCycle()
  }
  render() {
    const {foods, hiddenCategory} = this.props;
    return (
      <>
      <div className={styles.filterinputs} >
        {
          foods.map(food => (
            <Checkbutton
              key={food}
              name={food} 
              operation={this.state.operation.get(food)}
              ifClicked={this.handleChange} 
              hidden={hiddenCategory}
            />  
          ))
        }
      </div>
      </>
    );
  }
}

const MapStateToProps = state =>({
  data: state.criteria
})

export default connect(MapStateToProps, { editRecipeCriteria })(Checkboxes)