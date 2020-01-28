import {
  HIDE_MODAL,
  SHOW_MODAL,
  CLEAR_ALERT_INGREDIENT 
} from '../types'

export const hideModal = () => (dispatch) => (
  dispatch({
    type: HIDE_MODAL
  })
);


export const openModal = (details) =>  (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    modalType: 'CONFIRM_INGREDIENT',
    modalProps: details
  })
};     

export const clearConfirmationOpenModal = () =>  (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    modalType: 'CLEAR_CONFIRMATION',
    modalProps: null
  })
};    

export const confirmItemInIngredientList = (index) => (dispatch) => {
  dispatch({
    type: CLEAR_ALERT_INGREDIENT,
    index: index
  })
  dispatch({
    type: HIDE_MODAL
  }) } 