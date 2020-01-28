import React from 'react';
import {connect} from "react-redux";
import {hideModal, confirmItemInIngredientList } from "../../../actions/ModalActions"
import NutritionFacts from "../../Table/NutritionFacts/NutritionFacts"
import CancelBtn from "../../Buttons/CancelBtn/CancelBtn"
import * as Button from "../../Buttons/Button"
//eslint-disable-next-line
import Input from './ModalInput/Input'
//eslint-disable-next-line
import styles from './IngredientConfirmationModal.module.scss';
//eslint-disable-next-line
import NutritionFactsInputs from '../../Table/NutritionFactsInputs.js/NutritionFactsInputs';

class IngredientConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manuallyAddForm: false
    }
  }

  submitButtonWasPressed = (index) => {
    this.props.confirmItemInIngredientList(index)
  }

  setManuallyAddTrue = () => {
    this.setState({manuallyAddForm: true})
  }

  setManuallyAddFalse = () => {
    this.setState({manuallyAddForm: false})
  }

  render() {

    if(this.state.manuallyAddForm){
      return(
        <>
          <h2>work in progress...</h2>
          <Button.Secondary
            label='Back'
            onClick={this.setManuallyAddFalse}
            type='button'
          /> 
        </>
      )
    }

    return (
      <>
        <CancelBtn className={styles.closeBtn}
          onClick={this.props.hideModal}
        />
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h3>{this.props.food_name}</h3>
            </div>
            <div className={styles.image}>
              <img src={this.props.photo.thumb} alt={this.props.food_name} height="260"/> 
            </div>
            <div className={styles.buttons}>
              <Button.Confirm
                label='Confirm'
                onClick={()=>this.submitButtonWasPressed(this.props.indexOfIngredientItem)}
                type='button'
              />
              <Button.Secondary
                label='Manually Add'
                onClick={this.setManuallyAddTrue}
                type='button'
              /> 
            </div> 
          </div>
          <div className={styles.right}>
            <NutritionFacts {...this.props}/>
          </div> 
        </div>
      </>
    );
  }
}

const mapStateToProps = () =>({
})

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
    confirmItemInIngredientList: (index) => dispatch(confirmItemInIngredientList(index))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IngredientConfirmationModal);