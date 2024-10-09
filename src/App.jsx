import "./App.css";
import Header from "./components/Header";
import Experiencia from "./components/Experiencia";
import Section from "./components/Section";
import Proyectos from "./components/Proyectos";
import cono from "./assets/traffic-cone-svgrepo-com.svg";
function App() {
  return (
    <>
    <div className=" bg-yellow-400 rounded-lg font-onest font-semibold flex items-center justify-around py-2"><span><img src={cono} alt="" className="size-10" /></span>Sitio en Construcción<span><img src={cono} alt="" className="size-10" /></span></div>
      <Header></Header>
      <Section/>
      {/* <h1 className="text-white text-5xl font-bold font-onest flex pl-3">Proyectos</h1> */}
      {/* <Proyectos /> */}
      <Experiencia />
      {/* agregar iconos de lenguajes y que aparezcan y desaparezcan */}
    </>
  );
}

export default App;
