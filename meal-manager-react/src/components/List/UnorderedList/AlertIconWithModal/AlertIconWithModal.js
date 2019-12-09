import React, { Component } from 'react';
import {connect} from "react-redux";
import {ReactComponent as CautionSVG} from './caution.svg'
import {openModal} from "../../../../actions/ModalActions"
import stylesAlertIconWithModal from './AlertIconWithModal.module.scss' 

class AlertIconWithModal extends Component {
  openModalInComponent = ()=>{
    this.props.openModal(this.props.foodDetails)
    //console.log(this.props.foodDetails)
  } 

  render() {
    let {
      index,
      alertSet
    } = this.props

    if(alertSet.has(index)){
      return (
        <div 
          className={stylesAlertIconWithModal.main}
          onClick={this.openModalInComponent} 
        >
          {console.log("food details",this.props.foodDetails)}
          <CautionSVG
            className={`
              ${stylesAlertIconWithModal.svg}
            `}
          /> 
        </div>
      )
    }

    return (
      null
    );
  }
}

const mapStateToProps = (state, ownProps) =>({
  foodDetails: state.recipe.recipeIngredientsDetailed[ownProps.index]
})

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal()) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AlertIconWithModal);