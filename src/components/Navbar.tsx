import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full" >
      <nav className="w-full" >
        <ul className="flex items-center gap-4 justify-around h-16 shadow-xl">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/agregar-juego">Agregar juego</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
