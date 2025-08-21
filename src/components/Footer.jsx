import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="icon-elem">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="mailto:ejemplo@gmail.com" className="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
      </ul>

      <ul className="menuFoot">
        <li className="menu-elem">
          <a href="/" className="menu-icon">Inicio</a>
        </li>
        <li className="menu-elem">
          <a href="/" className="menu-icon">Contacto</a>
        </li>
        <li className="menu-elem">
          <a href="/" className="menu-icon">Equipo</a>
        </li>
        <li className="menu-elem">
          <a href="/" className="menu-icon">Video</a>
        </li>
        <li className="menu-elem">
          <a href="/" className="menu-icon">Sobre Nosotros</a>
        </li>
      </ul>

      <p className="textFoot">@2025 | Todos los derechos reservados</p>
      <p className="textFoot">
        Diseñado por{' '}
        <a
          href="https://tupagina.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          @proxNombre
        </a>
      </p>
    </footer>
  );
}
