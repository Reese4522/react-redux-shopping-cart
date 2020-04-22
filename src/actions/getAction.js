import { GET_NUMBERS_BASKET } from './types';

export const getNumbers = () => {
  return (dispatch) => {
    console.log('Obtendo todos os números do carrinho!');
    dispatch({
      type: GET_NUMBERS_BASKET,
    });
  };
};
