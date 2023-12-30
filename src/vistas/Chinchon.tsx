import CardChinchon from "../components/CardChinchon";
import useChinchonStore from "../hooks/useChinchonStore";
import ChinchonCrearJugador from "./ChinchonCrearJugador";

export default function Chinchon() {
  const { allJugadores } = useChinchonStore();

  const ordenJugadores = [...allJugadores].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  return (
    <main>
      <ChinchonCrearJugador />
      <section className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-12 gap-12">
        {ordenJugadores.map(({ nombre, puntos }, key) => {
          return <article className="flex items-center justify-center" >
            <CardChinchon nombre={nombre} puntos={puntos} key={key} />;
          </article>
        })}
      </section>
    </main>
  );
}
