export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rate: number;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Dummy Product 1',
    description: 'Description - Dummy Product 1',
    price: 99.99,
    rate: 4.5,
    quantity: 10,
  },
  {
    id: 2,
    name: 'Dummy Product 2',
    description: 'Description - Dummy Product 2',
    price: 149.99,
    rate: 3.8,
    quantity: 5,
  },
  {
    id: 3,
    name: 'Dummy Product 3',
    description: 'Description - Dummy Product 3',
    price: 199.99,
    rate: 4.2,
    quantity: 8,
  },
  {
    id: 4,
    name: 'Dummy Product 4',
    description: 'Description - Dummy Product 4',
    price: 79.99,
    rate: 4.0,
    quantity: 12,
  },
  {
    id: 5,
    name: 'Dummy Product 5',
    description: 'Description - Dummy Product 5',
    price: 249.99,
    rate: 4.7,
    quantity: 3,
  },
];

export default products;
