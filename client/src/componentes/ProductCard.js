import React from "react"
function ProductCard({ nombre, precio, imagen}) {
    return (
        <div className="tarjeta-producto">
            <img src={imagen} alt={`imagen de ${nombre}`} />
            <h1>{nombre}</h1>
            <p>{precio}</p>
        </div>
    );
}

export default ProductCard;
