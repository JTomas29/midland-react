import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import CiudadDeLibertad from "../img/CiudadDeLibertad.jpg";
import PlatenseVelez from "../img/PlatenseVelez.jpg";
import Tienda from "../img/tienda.jpg";
import SocioCartel from "../components/SocioCartel"; 

export default function Homes() {
  return (
    <main>
      <section className="grid-galeria">
        <article className="card">
          <img src={CiudadDeLibertad} alt="Sede Institucional" className="card-img" />
          <div className="card-content">
            <Link to="/institucional" className="btn">Institucional</Link>
          </div>
        </article>

        <article className="card">
          <img src={PlatenseVelez} alt="El Club" className="card-img" />
          <div className="card-content">
            <Link to="/el-club" className="btn">El Club</Link>
          </div>
        </article>

        <article className="card">
          <img src={Tienda} alt="Tienda oficial" className="card-img" />
          <div className="card-content">
            <Link to="/tienda" className="btn">Tienda</Link>
          </div>
        </article>
      </section>

      <section className="beneficios">
        <h2>Beneficios de ser Socio</h2>

        <div className="beneficios-grid">
          <div className="beneficio">
            <h3>Entrada gratuita</h3>
            <p>Acceso sin costo a todos los partidos de local.</p>
          </div>

          <div className="beneficio">
            <h3>Descuentos exclusivos</h3>
            <p>Promociones en la tienda oficial y locales adheridos.</p>
          </div>

          <div className="beneficio-btn-container">
            <Link to="/formulario-socio" className="btn">¡Unite Ahora!</Link>
          </div>
        </div>
      </section>

      {/* 👇 El cartel aparece como popup independiente */}
      <SocioCartel />
    </main>
  );
}
