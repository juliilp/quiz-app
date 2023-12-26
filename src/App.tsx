import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./vistas/Home";
import Panel from "./vistas/Panel";
import Navbar from "./components/Navbar";
import GlobalStore from "./store/globalStore";
import AgregarJuego from "./vistas/AgregarJuego";
import Resultados from "./vistas/Resultados";
export default function App() {
  return (
    <GlobalStore>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/agregar-juego" element={<AgregarJuego />} />
          <Route path="/resultados" element={<Resultados />} />

        </Routes>
      </BrowserRouter>
    </GlobalStore>
  );
}
