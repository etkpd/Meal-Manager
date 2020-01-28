import React, { Component } from 'react';
import {connect} from "react-redux";
import {ReactComponent as CautionSVG} from './caution.svg'
import {openModal} from "../../../actions/ModalActions"
import stylesAlertIconWithModal from './AlertIconWithModal.module.scss' 

class AlertIconWithModal extends Component {
  openModalInComponent = ()=>{
    let modalDetails = this.props.foodDetails
    modalDetails["indexOfIngredientItem"] = this.props.index
    let details = modalDetails
    this.props.openModal(details)
  } 

  render() {
    let {
      alertBoolean
    } = this.props

    if(alertBoolean){
      return (
        <div 
          className={stylesAlertIconWithModal.main}
          onClick={this.openModalInComponent} 
        >
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
  foodDetails: state.recipe.recipeIngredientsDetailed[ownProps.index],
  alertBoolean: state.recipe.alertConfirmIngredient[ownProps.index]
})

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (details) => dispatch(openModal(details)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AlertIconWithModal);