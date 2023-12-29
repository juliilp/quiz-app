import { useEffect } from "react";
import CardChinchon from "../components/CardChinchon";
import useChinchonStore from "../hooks/useChinchonStore";
import { useNavigate } from "react-router-dom";

export default function Chinchon() {
  const navigate = useNavigate()
  const { allJugadores } = useChinchonStore();

  const ordenJugadores = [...allJugadores].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  useEffect(() => {
    if(allJugadores.length === 0) {
      return navigate("/Chinchon/crearjugador")
    }
  },[])
  return (
    <main>
      <section className="flex gap-16">
        {ordenJugadores.map(({ nombre, puntos }, key) => {
          return <CardChinchon nombre={nombre} puntos={puntos} key={key} />;
        })}
      </section>
    </main>
  );
}
