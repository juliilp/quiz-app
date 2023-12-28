import { Link } from "react-router-dom";
import useQuizGamesStore from "../hooks/useQuizGamesStore";
import useChinchonStore from "../hooks/useChinchonStore";
export default function Navbar() {
  const { AccessoTerminadoFalse, typeGame, selectInicio } = useQuizGamesStore();
const {reiniciarResultados} = useChinchonStore()
  const handlerInicio = () => {
    AccessoTerminadoFalse();
    selectInicio();
  };

  return (
    <header className="w-full">
      <nav className="w-full">
        <ul className="flex items-center gap-4 justify-around h-16 shadow-xl">
          <li>
            <Link to="/" onClick={handlerInicio}>
              Inicio
            </Link>
          </li>
          {typeGame === "QuizGames" && (
            <>
              <li>
                <Link to="/QuizGames/agregar-juego">Agregar juego</Link>
              </li>
              <li>
                <Link to="/QuizGames/borrarPreguntas">Borrar pregunta</Link>
              </li>
            </>
          )}
          {typeGame === "Chinchon" && (
            <>
              <li>
                <Link to="/Chinchon/">Tabla</Link>
              </li>
              <li>
                <Link to="/Chinchon/crearjugador">Crear jugador</Link>
              </li>
              <li>
                <button onClick={reiniciarResultados} >Reiniciar resultados</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
