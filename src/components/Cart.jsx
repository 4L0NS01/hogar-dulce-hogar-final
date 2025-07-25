import React from 'react';

export default function Cart({ carrito, eliminarDelCarrito }) {
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="cart-page">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>${item.precio * item.cantidad}</td>
                  <td>
                    <button
                      className="btn-eliminar"
                      onClick={() => eliminarDelCarrito(item.id)}
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan="4">Total a pagar:</td>
                <td>${total}</td>
              </tr>
            </tbody>
          </table>

          <div className="cart-actions">
            <button className="btn-finalizar">Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
}
