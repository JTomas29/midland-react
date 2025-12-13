import React, { useEffect, useState } from 'react';
import fondo from "../img/fondo.jpg";
import marolio from "../img/Marcas/marolio1.png";
import ifk from "../img/Marcas/logo-IFK-negro.png";
import sportBet from "../img/Marcas/Sportsbet.png";
import sanatorio from "../img/Marcas/sanatorioSanJuanBautista.png";

export default function Institucional() {

  const primeraComision = [
    { cargo: "Presidente", nombre: "Francis Ribeiro" },
    { cargo: "Vicepresidente", nombre: "Agustín Orión" },
    { cargo: "Secretario", nombre: "Eloy Ibarra" },
    { cargo: "Prosecretario", nombre: "Juan Chara" },
    { cargo: "Tesorero", nombre: "Camila Sega" },
    { cargo: "Protesorero", nombre: "Alicia Milfovich" }
  ];

  const prensa = [
    { cargo: "Jefe de Prensa", nombre: "Nombre del jefe" },
    { cargo: "Fotografía", nombre: "Nombre del fotógrafo" },
    { cargo: "Comunicación", nombre: "Responsable de comunicación" },
  ];

  const sponsors = [
    {
        nombre: "Marolio",
        logo: marolio,
    },
    {
        nombre: "ifk",
        logo: ifk
    },
    {
        nombre: "sportBet",
        logo: sportBet
    },
     {
        nombre: "sanatorio",
        logo: sanatorio
    },
  ];

  const Card = ({ cargo, nombre, small }) => (
    <div
      className={
        "bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl " +
        (small ? "p-3 scale-95 opacity-90" : "p-5")
      }
    >
      <p className="text-blue-400 text-sm uppercase tracking-wide">{cargo}</p>
      <h3 className="text-white text-lg font-semibold">{nombre}</h3>
    </div>
  );

  const SponsorsCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % sponsors.length);
      }, 2500);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-center text-white text-3xl font-bold mb-8">
          Sponsors Oficiales
        </h2>

        <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 flex justify-center items-center">
          <a
            href={sponsors[index].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sponsors[index].logo}
              alt={sponsors[index].nombre}
              className="h-24 object-contain transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed pb-20 px-4"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* TÍTULO PRINCIPAL */}
      <h1 className="text-center text-white text-4xl font-bold pt-10 mb-10">
        Primera Comisión Directiva
      </h1>

      {/* GRID COMISIÓN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {primeraComision.map((item, i) => (
          <Card key={i} cargo={item.cargo} nombre={item.nombre} small={item.small} />
        ))}
      </div>

      {/* SECCIÓN DE PRENSA */}
      <h2 className="text-center text-white text-3xl font-bold mb-8">
        Departamento de Prensa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {prensa.map((item, i) => (
          <Card key={i} cargo={item.cargo} nombre={item.nombre} />
        ))}
      </div>

      {/* SPONSORS */}
      <SponsorsCarousel />
    </div>
  );
}
