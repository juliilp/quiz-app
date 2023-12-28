import useChinchonStore from "../hooks/useChinchonStore";

export default function ChinchonCrearJugador() {
  const { onChangeCreateJugadores, jugadorCreate, handlerAddJugadores } =
    useChinchonStore();

    
  const handlerCreateJugadores = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlerAddJugadores();
  };

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
    </main>
  );
}
