import { Link } from "react-router-dom";
import useQuizGamesStore from "../hooks/useQuizGamesStore";

interface Props {
  handlerInicio: () => void;
  reiniciarResultados: () => void;
  typeGame: string;
}

export default function NavbarDesktop({ handlerInicio, typeGame }: Props) {
  const { selectQuizGames, selectChinchon } = useQuizGamesStore();

  return (
    <nav className="w-full hidden md:block absolute top-0 bg-[#1B3B6F] z-10 ">
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
              <Link to="/quizgames/">Ir a jugar</Link>
            </li>
            <li>
              <Link to="/quizgames/agregar-juego">Agregar pregunta</Link>
            </li>
            <li>
              <Link to="/quizgames/borrarPreguntas">Borrar pregunta</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
