import { useEffect } from "react";
import CardChinchon from "../components/CardChinchon";
import useChinchonStore from "../hooks/useChinchonStore";
import { useNavigate } from "react-router-dom";
import ChinchonCrearJugador from "./ChinchonCrearJugador";

export default function Chinchon() {
  const navigate = useNavigate();
  const { allJugadores } = useChinchonStore();

  const ordenJugadores = [...allJugadores].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  useEffect(() => {
    if (allJugadores.length === 0) {
      return navigate("/Chinchon/crearjugador");
    }
  }, []);
  return (
    <main>
      <ChinchonCrearJugador />
      <section className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-12 gap-12">
        {ordenJugadores.map(({ nombre, puntos }, key) => {
          return <CardChinchon nombre={nombre} puntos={puntos} key={key} />;
        })}
      </section>
    </main>
  );
}
