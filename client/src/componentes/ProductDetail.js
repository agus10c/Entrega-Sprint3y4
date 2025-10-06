import React from "react"
import "./styles/ProductDetail.css";

function ProductDetail({ producto, agregarAlCarrito, volver }) {
    return (
        <div className="detalle-producto">
            <div className="detalle-imagen">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="detalle-info">
                <h1> Producto: {producto.nombre} </h1>
                <h3>${producto.nombre}</h3>
                <p className="precio">{producto.precio.toLocaleString("es-AR")}</p>
                <p className="descripcion">${producto.descripcion}</p>
            </div>
            <button onClick={() => agregarAlCarrito(producto)}>
                Añadir al Carrito
            </button>
            <button onClick={volver}>Volver al inicio</button>
        </div>
    );
}


export default ProductDetail;