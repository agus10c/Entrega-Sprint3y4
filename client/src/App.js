import React, { useState, useEffect } from "react";
import ProductList from "./componentes/ProductList";
import ProductDetail from "./componentes/ProductDetail";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]); // guarda los productos del backend
  const [cargando, setCargando] = useState(true); // indica si está cargando
  const [error, setError] = useState(false); // indica si hubo un error
  const [productoSeleccionado, setProductoSeleccionado] = useState(null); // detalle del producto elegido

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
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
    <div className="App">
      
    </div>
  );
}

export default App;
