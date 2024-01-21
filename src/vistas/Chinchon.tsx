import CardChinchon from "../components/CardChinchon";
import useChinchonStore from "../hooks/useChinchonStore";
import ChinchonCrearJugador from "./ChinchonCrearJugador";

export default function Chinchon() {
  const { allJugadores, reiniciarResultados } = useChinchonStore();

  const ordenJugadores = [...allJugadores].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  const handlerReiniciarResultados = () => {
    reiniciarResultados();
  };
  return (
    <main className={`w-full md:h-screen`}>
      <article className="flex justify-center items-center mt-12 md:mt-32">
        <button
          onClick={handlerReiniciarResultados}
          className="rounded-lg py-2 px-6 md:px-10 font-bold text-white bg-red-600"
        >
          Reiniciar resultados
        </button>
      </article>
      <ChinchonCrearJugador />
      <section className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-12 gap-12">
        {ordenJugadores.map(({ nombre, puntos }, key) => {
          return (
            <article className="flex items-center justify-center" key={key}>
              <CardChinchon nombre={nombre} puntos={puntos} key={key} />
            </article>
          );
        })}
      </section>
    </main>
  );
}
