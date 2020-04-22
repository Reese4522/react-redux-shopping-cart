import { ADD_PRODUCT_BASKET } from './types';

export const addBasket = () => {
  return (dispatch) => {
    console.log('Adicionando no carrinho!');
    dispatch({
      type: ADD_PRODUCT_BASKET,
    });
  };
};
