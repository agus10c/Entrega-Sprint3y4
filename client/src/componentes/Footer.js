import React from "react"
import "./styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">      
            <div className="footer-info">
                <h2>Información basica</h2>
                <p>Hermanos Jota — Casa Taller</p>
                <p>Av. San Juan 2847</p>
                <p>C1232AAB — Barrio de San Cristóbal</p>
                <p>Ciudad Autónoma de Buenos Aires Argentina</p>
                <p>Horarios:</p>
                <p>Lunes a Viernes: 10:00 - 19:00</p>
                <p>Sábados: 10:00 - 14:00</p>
            </div>
            <div className="footer-contacto">
                <h2>Contacto</h2>
                <p>Email general: <a href="mailto:info@hermanosjota.com.ar">info@hermanosjota.com.ar</a></p>
                <p>Ventas: <a href="mailto:ventas@hermanosjota.com.ar">ventas@hermanosjota.com.ar</a></p>
                <p>WhatsApp: <a href="https://wa.me/541145678900" target="_blank">+54 11 4567-8900</a></p>
                <p>Instagram: <a href="https://instagram.com/hermanosjota_ba" target="_blank">@hermanosjota_ba</a></p>
            </div>
            <p>© 2025 Hermanos Jota. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;