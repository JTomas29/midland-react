import React from 'react';
import "./ElClub.css"; 
import MidlandNacional from "../img/MidlandNacional.jpg";
import MidlandNacional2 from "../img/MidlandNacional2.jpg";
import MidlandAscenso2023 from "../img/AscensoPrimeraB2023.jpg";
import Midland2009 from "../img/MidlandCampeon2009.jpg";
import Midland89 from "../img/Ascenso1989.jpg";
import Midland1968 from "../img/MidlandCampeon1968.jpg";
export default function ElClub() {
  return (
    <>
      {/* SECCIÓN PRINCIPAL */}
      <section className="elclub-container">
        <div className="elclub-img">
          <img 
            src={MidlandNacional}
            alt="Midland Nacional"
            className="elclub-imagen"
          />
        </div>
        
        <div className="elclub-texto">
          <h1 className="midland-tittler">Ferrocarril Midland</h1>
          <h2 className="midland-subtitle">El Funebrero y su historia</h2>
          
          <p className="mid-desc">
            El Club Ferrocarril Midland, fundado en 1914, es una institución deportiva y social con una rica historia en la comunidad de Libertad, Buenos Aires. A lo largo de los años, el club ha sido un pilar fundamental para el desarrollo del deporte y la cultura en la región.
            El club ofrece una amplia gama de actividades deportivas, incluyendo fútbol, rugby, hockey, natación y tenis, entre otros. Además de sus instalaciones deportivas de primer nivel, el club cuenta con espacios sociales donde los miembros pueden reunirse, celebrar eventos y disfrutar de diversas actividades recreativas.
            La misión del Club Ferrocarril Midland es promover el deporte y la vida saludable, fomentando valores como el trabajo en equipo, la disciplina y el respeto. A lo largo de su historia, el club ha formado a numerosos deportistas y ha dejado una marca significativa en su comunidad.
          </p>
        </div>
      </section>

      {/* SECCIÓN DE HITOS */}
      <section className="hitos-container">
        <div className="hito">
          <div className="hito-img">
            <img src={MidlandNacional2} alt="Hito 1" />
          </div>
          <div className="hito-texto">
            <h2>Ascenso Al Nacional B</h2>
            <p>
              En 2025, Midland protagonizó una temporada histórica: tras consagrarse campeón del Torneo Apertura de la Primera B Metropolitana al vencer 2-0 a Flandria, aseguró su lugar en la final por el ascenso.
              Luego, con una campaña firme durante todo el Clausura, Midland ganó el título nuevamente, y aunque perdió 1-0 ante Flandria en la última fecha, le bastó que su principal rival Real Pilar también cayera, para consagrarse campeón de la temporada.
              Con esto, el club ascendió por primera vez en su historia a la Primera Nacional, obteniendo el tan ansiado boleto a la segunda categoría del fútbol argentino.
              Este ascenso representa un salto de gran magnitud para la institución: después de años de esfuerzo, constancia y crecimiento, Midland consolida su proyecto competitivo y se prepara para codearse con clubes de mayor jerarquía. El 2025 quedará marcado como un año de gloria en su historia.
            </p>
          </div>
        </div>

        <div className="hito reverse">
          <div className="hito-img">
            <img src={MidlandAscenso2023} alt="Hito 2" />
          </div>
          <div className="hito-texto">
            <h2>Su Vuelta A La Primera B Metropolitana</h2>
            <p>
            En la temporada 2023, Ferrocarril Midland realizó una campaña sólida que le permitió clasificarse al Reducido de la Primera C. A lo largo de las instancias eliminatorias, el equipo se mostró firme y competitivo, avanzando ronda tras ronda con autoridad. En la final del Reducido enfrentó a Liniers, logrando una victoria por 2-0 en el partido de ida disputado en Libertad. En la vuelta, jugada en Villegas, Midland volvió a imponerse por 3-1, con tantos de Gonzalo Vivanco, Francisco Molina e Ignacio Ruano, cerrando la serie con un global de 5-1. Con este resultado, el club consiguió el ascenso a la Primera B Metropolitana, marcando uno de los hitos más importantes de su historia reciente.
            </p>
          </div>
        </div>

        <div className="hito">
          <div className="hito-img">
            <img src={Midland2009} alt="Hito 3" />
          </div>
          <div className="hito-texto">
            <h2>Vuelta A La Primera C En 2009</h2>
            <p>
             En la temporada 2008/09, Ferrocarril Midland protagonizó una campaña memorable en la Primera D Metropolitana: con 74 puntos obtenidos en 34 partidos (22 triunfos, 8 empates y solo 4 derrotas), se consagró campeón del torneo.
             El 17 de mayo de 2009, el club se aseguró el título aunque perdió por 1-0 frente a Deportivo Paraguayo en la anteúltima fecha — el desencadenante fue el empate sin goles entre sus perseguidores, lo que le garantizó matemáticamente la consagración.
             Con ese campeonato Midland consiguió el ascenso a la Primera C Metropolitana, dejando la Primera D para no volver jamás.
            </p>
          </div>
        </div>
         <div className="hito reverse">
          <div className="hito-img">
            <img src={Midland89} alt="Hito 4" />
          </div>
          <div className="hito-texto">
            <h2>Campeon Invicto Y Record Sudamericano</h2>
            <p>
            En la temporada 1988/89, Ferrocarril Midland protagonizó una campaña inolvidable: se consagró campeón de la Primera D Metropolitana con un rendimiento impecable. El equipo, dirigido por Carlos Ribeiro, ganó el torneo sin perder un solo partido ganó 28 encuentros y empató 10, marcando 73 goles a favor y recibiendo apenas 15 en contra. Esa contundencia le permitió coronarse campeón y ascender a la Primera C Metropolitana.
            Pero la hazaña no terminó ahí: Midland mantuvo su invicto aún después del ascenso, alargando la racha a 50 partidos oficiales consecutivos sin conocer la derrota, un récord que lo convirtió en referente del fútbol ascenso y le dio prestigio como uno de los invictos más largos de Sudamérica en torneos locales.
            Ese 1989 quedó grabado en la historia del club: no sólo volvió a una categoría superior, sino que lo hizo con autoridad, solidez y números que hasta hoy se recuerdan como un hito ejemplar en su trayectoria.
            </p>
          </div>
        </div>
           <div className="hito">
          <div className="hito-img">
            <img src={Midland1968} alt="Hito 5" />
          </div>
          <div className="hito-texto">
            <h2>Primer Campeonato</h2>
            <p>
            En 1968, Ferrocarril Midland obtuvo el primer campeonato oficial de su historia al consagrarse en la Primera D. A lo largo del torneo mostró solidez y carácter, logrando el ascenso a la Primera C por primera vez. Este título marcó el inicio del crecimiento deportivo del club y se convirtió en el primer gran hito dentro de su trayectoria en el fútbol argentino.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

