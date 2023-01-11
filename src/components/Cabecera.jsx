import React from 'react';

export const Cabecera = ({ cantidad }) => (
  <header>
    <h1>Carrito de compras</h1>
    <p>Cantidad de productos <span> {cantidad}</span></p>
  </header>
);
