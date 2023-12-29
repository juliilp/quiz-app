import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    handlerInicio : () => void
    reiniciarResultados : () => void
    typeGame : string
}

export default function NavbarMobile({handlerInicio, reiniciarResultados, typeGame} : Props) {
    const [switchMenu, setSwitchMenu] = useState(false)
    const handlerSwitchMenu = () => setSwitchMenu((prev) => !prev)
  return (
    <nav className="flex md:hidden items-center justify-between h-12 relative shadow-xl" >
        <Link to="/" onClick={handlerInicio} className="ml-3" >Inicio</Link>
        <i className="bi bi-list text-4xl mr-3"  onClick={handlerSwitchMenu}  />
        {
            switchMenu &&  <ul className={`${typeGame == "QuizGames" && "h-24"} flex items-center flex-col w-full absolute top-12 bg-white z-10 gap-4 py-6`}>
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
        }
    </nav>
  )
}
