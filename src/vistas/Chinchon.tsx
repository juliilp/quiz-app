import CardChinchon from "../components/CardChinchon";
import useChinchonStore from "../hooks/useChinchonStore";

export default function Chinchon() {
  const {
    onChangeCreateJugadores,
    jugadorCreate,
    handlerAddJugadores,
    allJugadores
  } = useChinchonStore();


  const handlerCreateJugadores = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handlerAddJugadores()
  }
  console.log(allJugadores)
  return (
    <main>

      <form onSubmit={handlerCreateJugadores}>
        <input
          type="text"
          onChange={onChangeCreateJugadores}
          value={jugadorCreate.nombre}
        />
        <button>Crear jugador</button>
      </form>

    <section className="flex gap-16" >
      {
       
          allJugadores.map(({nombre,puntos}, key) => {
          return <CardChinchon nombre={nombre} puntos={puntos} key={key}  />

        })
      }
    </section>
      
    </main>
  );
}
