import React from 'react';
import { Item } from './Item';

export const Listado = ({ comprarProducto }) => {
  const items = require('./data.json');

  return (
    <div className='container'>
      {items && items.map((item) => <Item key={item.id} item={item} comprarProducto={comprarProducto}/>)}
    </div>
  );
}
