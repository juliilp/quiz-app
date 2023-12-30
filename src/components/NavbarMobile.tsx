import { useState } from "react";
import { Link } from "react-router-dom";
import useQuizGamesStore from "../hooks/useQuizGamesStore";
interface Props {
  handlerInicio: () => void;
  reiniciarResultados: () => void;
  typeGame: string;
}

export default function NavbarMobile({
  handlerInicio,
  reiniciarResultados,
  typeGame,
}: Props) {
  const { selectQuizGames, selectChinchon } = useQuizGamesStore();

  const [switchMenu, setSwitchMenu] = useState(false);
  const handlerSwitchMenu = () => setSwitchMenu((prev) => !prev);


  const handlerReiniciarResultados = () => {
    reiniciarResultados()
    handlerSwitchMenu()
  }
  return (
    <nav className="flex md:hidden items-center justify-between h-12 relative shadow-xl">
      <Link to="/" onClick={handlerInicio} className="ml-4">
        Inicio
      </Link>
      {typeGame.length > 0 && (
        <i className="bi bi-list text-4xl mr-3" onClick={handlerSwitchMenu} />
      )}

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
      {typeGame.length > 0 && switchMenu && (
        <ul
          className={`${
            typeGame == "QuizGames" && "h-24"
          } flex items-center flex-col w-full absolute top-12 bg-white z-10 gap-4 py-6`}
        >
          {typeGame === "QuizGames" && (
            <>
              <li>
                <Link to="/QuizGames/agregar-juego"
                onClick={handlerSwitchMenu}
                >Agregar juego</Link>
              </li>
              <li>
                <Link to="/QuizGames/borrarPreguntas"
                onClick={handlerSwitchMenu}
                >Borrar pregunta</Link>
              </li>
            </>
          )}
          {typeGame === "Chinchon" && (
            <>
              <li>
                <Link to="/Chinchon/"
                onClick={handlerSwitchMenu}
                >Tabla</Link>
              </li>
              <li>
                <Link to="/Chinchon/crearjugador"
                onClick={handlerSwitchMenu}
                >Crear jugador</Link>
              </li>
              <li>
                <button onClick={handlerReiniciarResultados}>
                  Reiniciar resultados
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
