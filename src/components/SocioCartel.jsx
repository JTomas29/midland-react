import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SocioCartel.css"; 

export default function SocioCartel() {
  const [mostrar, setMostrar] = useState(false);
  const [cerrando, setCerrando] = useState(false);

  useEffect(() => {
    
    const timerMostrar = setTimeout(() => {
      setMostrar(true);
    
    const timerOcultar = setTimeout(() => {
        iniciarCierre();
      }, 10000);

      return () => clearTimeout(timerOcultar);
    }, 10000);

    return () => clearTimeout(timerMostrar);
  }, []);

  // Función que activa la animación y luego oculta el cartel
  const iniciarCierre = () => {
    setCerrando(true);
    setTimeout(() => {
      setMostrar(false);
    }, 1000); // tiempo de la animación
  };

  if (!mostrar) return null;

  return (
    <div className={`cartel-contenido ${cerrando ? "cerrando" : ""}`}>
      <button className="cerrar-cartel" onClick={iniciarCierre}>✖</button>
      <h2>¡Hacete Socio Hoy!</h2>
      <Link to="/formulario-socio" className="btn">Unirme</Link>
    </div>
  );
}
