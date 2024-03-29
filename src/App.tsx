import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./vistas/Home";
import Navbar from "./components/Navbar";
import QuizGamesSore from "./store/QuizGamesStore";
import AgregarJuego from "./vistas/AgregarJuego";
import Resultados from "./vistas/Resultados";
import BorrarPreguntas from "./vistas/BorrarPreguntas";
import QuizGames from "./vistas/QuizGames";
import { useEffect } from "react";
import Chinchon from "./vistas/Chinchon";
import ChinchonStore from "./store/ChinchonStore";
import Truco from "./vistas/Truco";
export default function App() {
  useEffect(() => {
    const existingGames = localStorage.getItem("Games");
    const typeGames = localStorage.getItem("TypeGame");
    const jugadoresChinchon = localStorage.getItem("JugadoresChinchon");
    if (!existingGames) {
      localStorage.setItem("Games", JSON.stringify([]));
    }
    if (!typeGames) {
      localStorage.setItem("TypeGame", JSON.stringify([]));
    }

    if (!jugadoresChinchon) {
      localStorage.setItem("JugadoresChinchon", JSON.stringify([]));
    }
  }, []);
  return (
    <QuizGamesSore>
      <ChinchonStore>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/quizgames/agregar-juego" element={<AgregarJuego />} />
            <Route path="/quizgames/resultados" element={<Resultados />} />
            <Route
              path="/quizgames/borrarPreguntas"
              element={<BorrarPreguntas />}
            />
            <Route path="/quizgames" element={<QuizGames />} />
            <Route path="/Chinchon" element={<Chinchon />} />
            <Route path="/" element={<Home />} />
            <Route path="/truco" element={<Truco />} />
          </Routes>
        </BrowserRouter>
      </ChinchonStore>
    </QuizGamesSore>
  );
}
