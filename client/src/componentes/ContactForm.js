import React, { useState } from "react";
import "./styles/ContactForm.css";

function ContactForm() {
  // Estado para cada input
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  // Estado para mostrar mensaje de éxito
  const [exito, setExito] = useState(false);

  // Función para actualizar los valores
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar envío
  const realizarEnvio = (e) => {
    e.preventDefault(); // Evita recargar la página
    console.log(formData); // Muestra los datos en consola
    setExito(true);      // Muestra mensaje de éxito
    setFormData({          // Limpia el formulario
      nombre: "",
      email: "",
      mensaje: ""
    });
  };

  return (
    <div>
      <form className="formulario-contacto" onSubmit={realizarEnvio}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribe..."
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      {exito && <p className="mensaje-exito">Formulario enviado con éxito</p>}
    </div>
  );
}

export default ContactForm;