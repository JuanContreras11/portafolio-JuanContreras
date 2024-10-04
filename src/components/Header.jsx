import React, { useState } from "react";
import MenuBars from "../icons/MenuBars";
import perfilImg from "../assets/perfil.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-wrap items-center justify-between p-4">
      <img src={perfilImg} alt="Perfil" className="w-14 h-14 rounded-full" />
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <MenuBars size={24} /> : <MenuBars size={24} />}
        </button>
      </div>
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row gap-y-4 sm:gap-x-40 items-center h-20 opacity-80 font-onest`}
      >
        <a href="/" className="text-white">
          Inicio
        </a>
        <a href="/about" className="text-white">
          Sobre Mi
        </a>
        <a href="/proyectos" className="text-white">
          Proyectos
        </a>
        <a href="/contacto" className="text-white">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;