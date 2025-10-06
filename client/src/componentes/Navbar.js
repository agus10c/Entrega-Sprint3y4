import React from "react"
import "./styles/Navbar.css";
function Navbar({cantItem}) {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#footer">Pie de pagina</a></li>
                <div className="carrito">
                    <p>Carrito: {cantItem}</p>
                </div>
            </ul>
        </nav>
    )
}


export default Navbar;