import { createStore } from 'redux';
import { ICartState } from './modules/carts/types';

import rootREducert from './modules/rootReducer';

export interface IState {
  cart: ICartState
}
const store = createStore(rootREducert);

export default store;