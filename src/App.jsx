import "./App.css";
import Header from "./components/Header";
import Badge from "./components/Badge";
import Linkedin from "./icons/Linkedin";
import SocialPill from "./components/SocialPill";
import Github from "./icons/Github";
import Mail from "./icons/Mail";
function App() {
  return (
    <>
      <Header></Header>
      <section className="w-full py-44">
        <h1 className="text-white text-5xl font-bold font-onest mb-5 flex justify-between">
          Hola!, soy Juan Contreras
           <a
            href="https://www.linkedin.com/in/juan-contreras-17277715b/"
            target="_blank"
            rel="noopener"
            className="flex justify-center items-center "
          >
            <Badge>Disponible para trabajar</Badge>
          </a> 
        </h1>
        <h2 className="text-white font-onest text-2xl opacity-90 text-balance py-5 text-left">
          <span className="text-yellow-200/90">Desarrollador Junior </span>
          <span>Estudiante Tecnico en Informática</span> de
          <span className="text-red-300/70"> Santiago de Chile.</span>
          <span> Me gusta crear paginas esteticas y funcionales</span>
        </h2>

        <nav className="flex gap-x-2 justify-start ">
          <SocialPill href="https://www.linkedin.com/in/juan-contreras-17277715b/">
            <span className="text-white flex flex-row gap-2 items-center p-1">
              <Linkedin />
              Linkedin
            </span>
          </SocialPill>
          {/* ********** */}
          <SocialPill href="https://github.com/JuanContreras11">
            <span className="text-white flex flex-row gap-2 items-center p-1">
              <Github />
              Github
            </span>
          </SocialPill>
          {/* ********** */}
          <SocialPill copyToClipboard="juan.contreras.g123@gmail.com">
            <span className="text-white flex flex-row gap-2 items-center p-1">
              <Mail />
              juan.contreras.g123@gmail.com
            </span>
          </SocialPill>
        </nav>
      </section>
    </>
  );
}

export default App;
