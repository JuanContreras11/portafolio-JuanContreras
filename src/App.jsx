import "./App.css";
import Header from "./components/Header";
import Experiencia from "./components/Experiencia";
import Section from "./components/Section";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <>
      <Header></Header>
      <Section/>
      <Proyectos />
      <Experiencia />
      {/* agregar iconos de lenguajes y que aparezcan y desaparezcan */}
    </>
  );
}

export default App;
