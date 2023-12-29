import { Link } from 'react-router-dom'
import useQuizGamesStore from "../hooks/useQuizGamesStore";

interface Props {
    handlerInicio : () => void
    reiniciarResultados : () => void
    typeGame : string
}

export default function NavbarDesktop({handlerInicio, reiniciarResultados, typeGame} : Props) {
  const { selectQuizGames, selectChinchon } = useQuizGamesStore();

  return (
    <nav className="w-full hidden md:block ">
    <ul className={`justify-around flex items-center gap-4 h-16 shadow-xl`}>
      <li>
        <Link to="/" onClick={handlerInicio}>
          Inicio
        </Link>
      </li>
      {typeGame.length === 0 && (
        <>
          <Link to="/QuizGames" onClick={selectQuizGames}>
            Quiz Games
          </Link>

          <Link to="/Chinchon" className="mr-4" onClick={selectChinchon}>
            Chinchon
          </Link>
        </>
      )}
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
  )
}
