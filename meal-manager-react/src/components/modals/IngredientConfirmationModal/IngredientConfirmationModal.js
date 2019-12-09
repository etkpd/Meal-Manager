import React from 'react';
//eslint-disable-next-line
import Input from './ModalInput/Input'
//eslint-disable-next-line
import styles from './IngredientConfirmationModal.module.scss';

class IngredientConfirmationModal extends React.Component {

  render() {
    return (
      <div>
        <button>Submit</button>
        {console.log(this.props)}
      </div>
    );
  }
}


export default IngredientConfirmationModal;