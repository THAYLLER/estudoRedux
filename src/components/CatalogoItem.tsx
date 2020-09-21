import { IProduce } from 'immer/dist/internal';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/carts/actions';
import { IProduct } from '../store/modules/carts/types';
import Catalog from './Catalog';

interface CatalogoItemProps {
  product: IProduce;
}
const CatalogoItem: React.FC<CatalogoItemProps> = ({product}) => {
  const dispatch = useDispatch();
  const handleAddProductToCart  = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);
  
  return (
    <article key={Catalog.id}>
      <strong>{Catalog.title}</strong> {" - "}
      <span>{Catalog.price}</span> {"  "}

      <button onClick={() => handleAddProductToCart(Catalog)}>Comprar</button>
    </article>
  );
}

export default CatalogoItem