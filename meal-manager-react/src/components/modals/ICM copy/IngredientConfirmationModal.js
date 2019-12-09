import React from 'react';
//eslint-disable-next-line
import Input from './ModalInput/Input'
//eslint-disable-next-line
import styles from './IngredientConfirmationModal.module.scss';
import Modal from 'react-modal'

class IngredientConfirmationModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    

    return (
      <div>
      <button onClick={this.handleOpenModal}>Trigger Modal</button>
      <Modal 
         isOpen={this.state.showModal}
         contentLabel="onRequestClose Example"
         onRequestClose={this.handleCloseModal}
      >
        <p>Modal text!</p>
        <button onClick={this.handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
    );
  }
}


export default IngredientConfirmationModal;