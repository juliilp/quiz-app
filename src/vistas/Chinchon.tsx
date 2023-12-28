import CardChinchon from "../components/CardChinchon";
import useChinchonStore from "../hooks/useChinchonStore";

export default function Chinchon() {
  const { allJugadores } = useChinchonStore();

  const ordenJugadores = [...allJugadores].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );
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
