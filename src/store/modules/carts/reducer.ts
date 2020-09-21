import  { Reducer } from 'redux';
import produce from 'immer';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  itens: []
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {

  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':{
          const { product } = action.payload;

          const productInCartIndex = draft.itens.findIndex(item => item.product.id === product.id);

          if(productInCartIndex >= 0) {
            draft.itens[productInCartIndex].quantity++;
          } else {
            draft.itens.push({
              product,
              quantity: 1
            });
          }
        break;
      }default: {
        return draft;
      }
    }
  });
}

export default cart;