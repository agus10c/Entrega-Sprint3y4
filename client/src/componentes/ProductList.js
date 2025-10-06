import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./styles/ProductList.css";


function ProductList({seleccionarProducto}) {
  const [productos, setProductos] = useState([]); // guarda los productos del backend
  const [cargando, setCargando] = useState(true); // indica si está cargando
  const [error, setError] = useState(false); // indica si hubo un error

  useEffect(() => {
    fetch("/api/productos")
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta del servidor");
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch(() => setError(true))
      .finally(() => setCargando(false));
  }, []);

  // Renderizado condicional
  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos</p>;

  return (
    <ul className="lista-productos">
      {/* 2. Usamos .map() para iterar sobre nuestros datos */}
      {productos.map(producto => (
        // 3. Por cada elemento, devolvemos un <li>.
        // ¡Le asignamos la 'key' usando el ID único de la tarea!
        <li key={producto.id} onClick={() => seleccionarProducto(producto)}>
          <ProductCard
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        </li>
      ))}
    </ul>
  );
}
export default ProductList;