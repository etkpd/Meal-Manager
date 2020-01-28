import React from 'react';
import {connect} from "react-redux";
import ClearIngredientConfirmation from './Alert/ClearIngredientConfirmation/ClearIngredientConfirmation'
import IngredientConfirmationModal from './IngredientConfirmationModal/IngredientConfirmationModal'
import Modal from 'react-modal'
import {hideModal} from '../../actions/ModalActions'
import stylesRootModal from './RootModal.module.scss'

const MODAL_COMPONENTS = {
  'CONFIRM_INGREDIENT': IngredientConfirmationModal,
  'CLEAR_CONFIRMATION': ClearIngredientConfirmation
}

const ModalRoot = ({ modalType, modalProps, hideModal }) => {
  if (!modalType) {
    return null
  }
  const SpecificModal = MODAL_COMPONENTS[modalType]
  return (
    <Modal
      isOpen={true}
      onRequestClose={() => hideModal()}
      className={stylesRootModal.content}
      overlayClassName={stylesRootModal.overlay}
    >
      <SpecificModal {...modalProps}/>
    </Modal>
  )
}

function mapStateToProps(state) {
  return state.modal
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot)