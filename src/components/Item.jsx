import React, { useState } from 'react';

export const Item = ({ item, comprarProducto }) => {
  const [stock, setStock] = useState(item.stock);

  const onClick = () => {
    comprarProducto();
    if (stock === 0) { return ;}
    setStock(stock - 1);
  }

  return (
    <div className='producto'>
      <h3>{item.producto.nombre}</h3>
      <p>{item.producto.descripcion}</p>
      <h5>En stock: {stock === 0 ? <span>{stock}</span> : stock}</h5>
      <button disabled={stock === 0} onClick={onClick}>{stock === 0 ? 'sin stock' : 'comprar'}</button>
    </div>
  );
}
