import { Link } from 'react-router-dom'

interface Props {
    handlerInicio : () => void
    reiniciarResultados : () => void
    typeGame : string
}

export default function NavbarDesktop({handlerInicio, reiniciarResultados, typeGame} : Props) {
  return (
    <nav className="w-full hidden md:block ">
    <ul className={` ${typeGame ? "justify-around" : "pl-4"}  flex items-center gap-4 h-16 shadow-xl`}>
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
  )
}
