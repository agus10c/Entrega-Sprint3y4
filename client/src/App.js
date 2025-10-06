import './App.css'
import Navbar from "./componentes/Navbar"
import ProductList from "./componentes/ProductList"
import ContactForm from './componentes/ContactForm'
import Footer from "./componentes/Footer"
import ProductDetail from './componentes/ProductDetail'
import React, { useState } from "react"

function App() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  // Función para mostrar detalle de un producto
  const seleccionarProducto = (producto) => setProductoSeleccionado(producto);

  // Función para volver al catálogo
  const volverAlInicio = () => setProductoSeleccionado(null);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="App">
      <Navbar cantItem={carrito.length} />

      {!productoSeleccionado ? (
        <>
          {/* Listado de Productos */}
          <section id="productos">
            <ProductList seleccionarProducto={seleccionarProducto} />
          </section>

          {/* Formulario de contacto */}
          <section id="contacto">
            <ContactForm />
          </section>
        </>
      ) : (
        // Vista detalle de producto
        <ProductDetail
          producto={productoSeleccionado}
          agregarAlCarrito={agregarAlCarrito}
          volver={volverAlInicio}
        />
      )}

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
