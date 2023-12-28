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
import ChinchonCrearJugador from "./vistas/ChinchonCrearJugador";
export default function App() {

  useEffect(() => {
    const existingGames = localStorage.getItem("Games");
    const typeGames = localStorage.getItem("TypeGame")
    const jugadoresChinchon = localStorage.getItem("JugadoresChinchon")
    if (!existingGames) {
      localStorage.setItem("Games", JSON.stringify([]));
    }
    if(!typeGames){
      localStorage.setItem("TypeGame", JSON.stringify([]))
    }

    if(!jugadoresChinchon){
      localStorage.setItem("JugadoresChinchon", JSON.stringify([]))
    }
  }, []);
  return (
    <QuizGamesSore>
      <ChinchonStore>
      <BrowserRouter>
        <Navbar />
        <Routes>
       
            <Route path="/QuizGames/agregar-juego" element={<AgregarJuego />} />
            <Route path="/QuizGames/resultados" element={<Resultados />} />
            <Route
              path="/QuizGames/borrarPreguntas"
              element={<BorrarPreguntas />}
            />
            <Route path="/QuizGames" element={<QuizGames />} />
            <Route path="/Chinchon" element={<Chinchon />} />
            <Route path="/Chinchon/crearjugador" element={<ChinchonCrearJugador />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </ChinchonStore>
    </QuizGamesSore>
  );
}
