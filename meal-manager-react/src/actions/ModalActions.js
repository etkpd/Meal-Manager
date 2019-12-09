import {
  HIDE_MODAL,
  SHOW_MODAL
} from '../types'

export const hideModal = () => (dispatch) => (
  dispatch({
    type: HIDE_MODAL
  })
);


export const openModal = (foodDetails) =>  (dispatch) => {
  console.log('was clicked')
  dispatch({
    type: SHOW_MODAL,
    modalType: 'CONFIRM_INGREDIENT',
    modalProps: foodDetails
  })
};     



