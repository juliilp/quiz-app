import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/panel">Panel</Link>
          </li>
          <li>
            <Link to="/agregar-juego">Agregar juego</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
