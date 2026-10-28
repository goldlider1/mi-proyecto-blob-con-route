import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h2>logo</h2>
      <nav>
       
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/proyecto">Ir a proyecto</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
