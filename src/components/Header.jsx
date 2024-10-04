import React from "react";
import perfilImg from "../assets/perfil.jpg";

const Header = () => {
  return (
      <header className="flex flex-row items-center justify-between">
        <img src={perfilImg} alt="" className="size-14 rounded-full"/>
      <nav className=" flex  flex-row gap-x-40 items-center h-20 opacity-80 font-onest ">
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
