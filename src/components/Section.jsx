import React from 'react'
import Badge from './Badge'
import SocialPill from './SocialPill'
import Linkedin from '../icons/Linkedin'
import Github from '../icons/Github'
import Mail from '../icons/Mail'
import perfilImg from '../assets/Perfil5.jpg'

const Section = () => {
  return (
    <section className="w-full py-20  flex flex-row border">
      <div className='border flex flex-col '>
        <h1 className="text-white text-5xl font-bold font-onest mb-5  md:w-[100%] flex justify-center ">
          Hola!, soy Juan Contreras
          <a
            href="https://www.linkedin.com/in/juan-contreras-17277715b/"
            target="_blank"
            rel="noopener"
            className="flex justify-center items-center "
          >
            {/* <Badge>Disponible para trabajar</Badge> */}
          </a>
        </h1>
        <h2 className="text-white font-onest text-2xl opacity-90 text-balance py-5 text-left md:w-[100%] flex-col justify-center items-center border pl-[14%] pt-[10%]">
          <span className="text-yellow-200/90">Desarrollador Junior </span>
          <span>Estudiante Tecnico en Informática</span> de
          <span className="text-red-300/70"> Santiago de Chile.</span>
          Después de haber trabajado en diversas áreas de TI, ahora estoy
          enfocado en aplicar mis conocimientos para llevar mis
          ideas al siguiente nivel 
        </h2>

        <nav className="flex flex-col sm:flex-row sm:gap-x-2 gap-y-2 justify-center mt-10">
          <SocialPill href="https://www.linkedin.com/in/juan-contreras-17277715b/">
            <span className="text-white flex flex-row gap-2 items-center p-1 rounded-full ">
              <Linkedin />
              Linkedin
            </span>
          </SocialPill>
          {/* ********** */}
          <SocialPill href="https://github.com/JuanContreras11">
            <span className="text-white flex flex-row gap-2 items-center p-1 rounded-full">
              <Github />
              Github
            </span>
          </SocialPill>
          {/* ********** */}
          <SocialPill copyToClipboard="juan.contreras.g123@gmail.com">
            <span className="text-white flex flex-row gap-2 items-center p-1 rounded-full">
              <Mail />
              juan.contreras.g123@gmail.com
            </span>
          </SocialPill>
        </nav>
      </div>
        <img src={perfilImg} alt="Perfil" className="w-[30%] h-[30%]  mr-5 grayscale  hidden md:block rounded-full"/>
      </section>
  )
}

export default Section