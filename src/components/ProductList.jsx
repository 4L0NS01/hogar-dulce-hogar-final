import React from 'react';
import Product from './Product';

const productos = [
  { id: 1, nombre: 'Silla', precio: 15000, imagen: 'img/silla.webp' },
  { id: 2, nombre: 'Mesa', precio: 30000, imagen: 'img/mesa.webp' },
  { id: 3, nombre: 'Lámpara', precio: 10000, imagen: 'img/lampara.webp' },
  { id: 4, nombre: 'Cuadro', precio: 8000, imagen: 'img/cuadro.jpg' },
];

export default function ProductList({ agregarAlCarrito }) {
  return (
    <div className="row">
      {productos.map(producto => (
        <div className="col-md-3" key={producto.id}>
          <Product producto={producto} agregarAlCarrito={agregarAlCarrito} />
        </div>
      ))}
    </div>
  );
}
