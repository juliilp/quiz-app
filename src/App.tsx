import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./vistas/Home";
import Navbar from "./components/Navbar";
import GlobalStore from "./store/GlobalStore";
import AgregarJuego from "./vistas/AgregarJuego";
import Resultados from "./vistas/Resultados";
import BorrarPreguntas from "./vistas/BorrarPreguntas";
import QuizGames from './vistas/QuizGames'
export default function App() {
  return (
    <GlobalStore>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuizGames/agregar-juego" element={<AgregarJuego />} />
          <Route path="/QuizGames/resultados" element={<Resultados />} />
          <Route path="/QuizGames/borrarPreguntas" element={<BorrarPreguntas />} />
          <Route path="/QuizGames" element={<QuizGames />} />
        </Routes>
      </BrowserRouter>
    </GlobalStore>
  );
}
