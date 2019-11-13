import React from 'react';
import { connect } from 'react-redux';
import Checkbutton from './Checkbutton/Checkbutton';
import styles from './Checkbuttons.module.scss';
import { editRecipeCriteria } from '../../../actions/CriteriaActions'
//import queryString from 'query-string';

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    //console.log(this.props.foodsCriteria)
  }
  componentDidUpdate(){
    //decode url. extract items from relevant food category
    //update this.state.checkedItems to reflect newly updated url
  }

  componentWillReceiveProps(){
    //console.log(this.props.foodsCriteria)
  }

  handleChange(e) {
    let {foodsCriteria, foodGroup } = this.props
    const food = e.target.name;
    let conditional = ''
    if(!foodsCriteria[food]){
      conditional = 'OR'
    } else if (foodsCriteria[food] === 'OR'){
      conditional = 'AND'      
    } else if (foodsCriteria[food] === 'AND'){
      conditional = 'NOT'      
    } else if (foodsCriteria[food] === 'NOT'){
      conditional = null      
    }

    let criteriaObj = {...foodsCriteria};
    criteriaObj[food] = conditional
    if(!conditional){
      delete criteriaObj[`${food}`]
    } 
    let foodgroupCriteriaObject = Object.create(null)
    foodgroupCriteriaObject[foodGroup] = criteriaObj
    this.props.onCriteriaCycle()
    this.props.editRecipeCriteria(foodgroupCriteriaObject)
  }
  render() {
    const {foods, hiddenCategory, foodsCriteria} = this.props;
    return (
      <div className={styles.filterinputs} >
        {
          foods.map(food => (
            <Checkbutton
              key={food}
              name={food} 
              operation={foodsCriteria[food]}
              ifClicked={this.handleChange} 
              hidden={hiddenCategory}
            />
          ))
        }
      </div>
    );
  }
}

const MapStateToProps = (state, ownProps) =>({
  foodsCriteria: state.criteria[ownProps.foodGroup]
})

export default connect(MapStateToProps, { editRecipeCriteria })(Checkboxes)