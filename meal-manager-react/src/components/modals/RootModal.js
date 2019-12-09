import React from 'react';
import {connect} from "react-redux";
import IngredientConfirmationModal from './IngredientConfirmationModal/IngredientConfirmationModal'
import Modal from 'react-modal'
import {hideModal} from '../../actions/ModalActions'

const MODAL_COMPONENTS = {
  'CONFIRM_INGREDIENT': IngredientConfirmationModal,
}

const ModalRoot = ({ modalType, modalProps, hideModal }) => {
  if (!modalType) {
    return null
  }
  console.log('program reaches here')
  const SpecificModal = MODAL_COMPONENTS[modalType]
  return (
    <Modal
      isOpen={true}
      onRequestClose={() => hideModal()}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '150px',
          left: '650px',
          right: '650px',
          bottom: '150px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
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