import { Link } from "react-router-dom";
import useQuizGamesStore from "../hooks/useQuizGamesStore";
export default function Navbar() {
  const { AccessoTerminadoFalse } = useQuizGamesStore();

  const handlerInicio = () => {
    AccessoTerminadoFalse();
    localStorage.setItem("TypeGame", "");
  };

  return (
    <header className="w-full">
      <nav className="w-full">
        <ul className="flex items-center gap-4 justify-around h-16 shadow-xl">
          <li>
            <Link to="/" onClick={() => handlerInicio}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/QuizGames">QuizGames</Link>
          </li>
          <li>
            <Link to="/Chinchon">Chinchon</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
