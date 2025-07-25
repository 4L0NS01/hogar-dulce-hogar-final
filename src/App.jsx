import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/App.css';

export default function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarAlCarrito = (producto, cantidad) => {
    const copia = [...carrito];
    const existente = copia.find(p => p.id === producto.id);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      copia.push({ ...producto, cantidad });
    }

    setCarrito(copia);
  };

   const eliminarDelCarrito = (id) => {
  const nuevoCarrito = carrito.filter(item => item.id !== id);
  setCarrito(nuevoCarrito);
};

  return (
    <div>
      <Header
        cantidadTotal={carrito.reduce((acc, p) => acc + p.cantidad, 0)}
        onToggleCarrito={() => setMostrarCarrito(!mostrarCarrito)}
      />
      <div className="container mt-4">
        {mostrarCarrito
        ?<Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito}/>
          : <ProductList agregarAlCarrito={agregarAlCarrito} />
          
        }
      </div>
    </div>
  );
}
