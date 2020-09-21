export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItens {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  itens: ICartItens[];
}