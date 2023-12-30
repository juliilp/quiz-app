import { useEffect, useState } from "react";
import useChinchonStore from "../hooks/useChinchonStore";

export default function ChinchonCrearJugador() {
  const [errButton, setErrButton] = useState(true)
  const { onChangeCreateJugadores, jugadorCreate, handlerAddJugadores } =
    useChinchonStore();

    
  const handlerCreateJugadores = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlerAddJugadores();
  };

useEffect(() => {
if(jugadorCreate.nombre.length  < 3) {
  return setErrButton(true)
}
return setErrButton(false)
},[errButton,jugadorCreate.nombre])
  return (
    <main className="w-full flex items-center justify-center mt-16" >
      <form onSubmit={handlerCreateJugadores} className="flex gap-4 items-center justify-center" >
        <input
          type="text"
          onChange={onChangeCreateJugadores}
          value={jugadorCreate.nombre}
          placeholder="Nombre del jugador.."
          className="outline-2 py-2 pl-4 relative w-[300px] h-max border border-black rounded-lg "
        />
        <button
        className={` ${
          errButton ? "cursor-not-allowed" : "cursor-pointer"
        } rounded-lg py-2 px-6 md:px-10 font-bold text-white bg-red-600  `}
        >Crear jugador</button>
      </form>
    </main>
  );
}
