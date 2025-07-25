import React from 'react';

export default function Header({ cantidadTotal, onToggleCarrito }) {
  return (
    <header className="header px-4 py-3 d-flex justify-content-between align-items-center bg-dark text-white">
      <h1 className="m-0">Hogar dulce Hogar</h1>
      <div className="cart-icon position-relative" onClick={onToggleCarrito} style={{ cursor: 'pointer' }}>
        🛒
        <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cantidadTotal}
        </span>
      </div>
    </header>
  );
}
