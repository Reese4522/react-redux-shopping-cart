import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types';

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log('quantidade interna do produto');
    console.log('Ação é', action);
    console.log('O nome do produto é ', name);

    dispatch({
      type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name,
    });
  };
};

export const clearProduct = (name) => {
  return (dispatch) => {
    console.log('Apagando produtos');
    console.log('Nome do produto', name);

    dispatch({
      type: CLEAR_PRODUCT,
      payload: name,
    });
  };
};
