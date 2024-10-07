import React, { useState } from "react";
import MenuBars from "../icons/MenuBars";
import perfilImg from "../assets/perfil.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex  items-center justify-around  p-4">
      <img src={perfilImg} alt="Perfil" className="w-14 h-14 rounded-full md:hidden block " /> 
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <MenuBars size={24} /> : <MenuBars size={24} />}
        </button>
      </div>
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row gap-y-4 sm:gap-x-24 items-center h-20 opacity-80 font-onest`}
      >
        <a href="/" className="text-white">
          Inicio
        </a>
        <a href="/" className="text-white">
          Sobre Mi
        </a>
        <a href="/" className="text-white">
          Proyectos
        </a>
        <a href="/" className="text-white">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;