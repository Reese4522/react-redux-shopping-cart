import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    image01: {
      name: 'Camiseta 01',
      tagName: 'image01',
      price: 12.0,
      numbers: 0,
      inCart: false,
    },
    image02: {
      name: 'Camiseta 02',
      tagName: 'image02',
      price: 35.0,
      numbers: 0,
      inCart: false,
    },
    image03: {
      name: 'Camiseta 03',
      tagName: 'image03',
      price: 87.0,
      numbers: 0,
      inCart: false,
    },
    image04: {
      name: 'Camiseta 04',
      tagName: 'image04',
      price: 100.0,
      numbers: 0,
      inCart: false,
    },
    image05: {
      name: 'Camiseta 05',
      tagName: 'image05',
      price: 50.0,
      numbers: 0,
      inCart: false,
    },
    image06: {
      name: 'Camiseta 06',
      tagName: 'image06',
      price: 70.0,
      numbers: 0,
      inCart: false,
    },
    image07: {
      name: 'Camiseta 07',
      tagName: 'image07',
      price: 37.0,
      numbers: 0,
      inCart: false,
    },
    image08: {
      name: 'Camiseta 08',
      tagName: 'image08',
      price: 80.0,
      numbers: 0,
      inCart: false,
    },
    image09: {
      name: 'Camiseta 09',
      tagName: 'image09',
      price: 120.0,
      numbers: 0,
      inCart: false,
    },
    image10: {
      name: 'Camiseta 10',
      tagName: 'image10',
      price: 90.0,
      numbers: 0,
      inCart: false,
    },
    image11: {
      name: 'Camiseta 11',
      tagName: 'image11',
      price: 40.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = {};
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };
      // console.log(addQuantity);
      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      // resolver nº negativo
      let newCartCost = 0;
      let newBasketNumbers = 0;

      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
        newCartCost = state.cartCost;
        newBasketNumbers = state.basketNumbers;
      } else {
        productSelected.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasketNumbers = state.basketNumbers - 1;
      }

      return {
        ...state,
        cartCost: newCartCost,
        basketNumbers: newBasketNumbers,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersBackup = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;

      return {
        ...state,
        basketNumbers: state.basketNumbers - numbersBackup,
        cartCost: state.cartCost - numbersBackup * productSelected.price,

        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};
