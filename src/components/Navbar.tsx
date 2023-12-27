import { Link } from "react-router-dom";
import useGlobalStore from "../hooks/useGlobalStore";

export default function Navbar() {
  const {AccessoTerminadoFalse, allGames} = useGlobalStore()
  return (
    <header className="w-full" >
      <nav className="w-full" >
        <ul className="flex items-center gap-4 justify-around h-16 shadow-xl">
          <li>
            <Link to="/"
            onClick={() => AccessoTerminadoFalse()}
            >Inicio</Link>
          </li>
          <li>
            <Link to="/agregar-juego"
            onClick={() => AccessoTerminadoFalse()}
            >Agregar juego</Link>
          </li>
          {
            allGames.length > 0 && <li>
              <Link to="/borrarPreguntas" >
              Borrar pregunta
              </Link>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
}
