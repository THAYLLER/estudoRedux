import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../store/modules/carts/types';
import api from '../services/api';
import { addProductToCart } from '../store/modules/carts/actions';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, []);

  const handleAddProductToCart  = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product));
  }, []);

  return (
    <div>
      {catalog.map(Catalog => (
        <article key={Catalog.id}>
          <strong>{Catalog.title}</strong> {" - "}
          <span>{Catalog.price}</span> {"  "}

          <button onClick={() => handleAddProductToCart(Catalog)}>Comprar</button>
        </article>
      ))}
    </div>
  );
}

export default Catalog;