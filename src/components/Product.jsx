import React, { useState } from 'react';

export default function Product({ producto, agregarAlCarrito }) {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="card product-card mb-4">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="card-img-top"
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <input
            type="number"
            min="1"
            className="form-control"
            style={{ width: '70px' }}
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          />
          <button
            className="btn btn-primary"
            onClick={() => agregarAlCarrito(producto, cantidad)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
