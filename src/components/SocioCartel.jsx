import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SocioCartel.css"; 

export default function SocioCartel() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    // Mostrar a los 2 segundos
    const timerMostrar = setTimeout(() => {
      setMostrar(true);

      // Ocultar a los 10 segundos
      const timerOcultar = setTimeout(() => {
        setMostrar(false);
      }, 10000);

      return () => clearTimeout(timerOcultar);
    }, 10000);

    return () => clearTimeout(timerMostrar);
  }, []);

  if (!mostrar) return null; 

  return (
    <div className="cartel-contenido">
      <button
        className="cerrar-cartel"
        onClick={() => setMostrar(false)}
      >
        ✖
      </button>
      <h2>¡Hacete Socio Hoy!</h2>
      <Link to="/formulario-socio" className="btn">Unirme</Link>
    </div>
  );
}
