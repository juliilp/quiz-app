import { createContext, useEffect, useState } from "react";
import { Jugadores } from "../interface/Jugadores";


interface values {
  handlerAddJugadores: () => void;
  onChangeCreateJugadores: (e: React.ChangeEvent<HTMLInputElement>) => void;
  jugadorCreate : Jugadores,
  allJugadores: Jugadores[]
}
export const storeChinchon = createContext<values>(null);

export default function ChinchonStore({ children }: any) {
  const [allJugadores, setAllJugadores] = useState<Jugadores[]>([])
  const [jugadorCreate, setJugadorCreate] = useState({
    nombre: "",
    puntos: 0,
  });

 
  useEffect(() => {
    const storedJugadoresChinchon = localStorage.getItem("JugadoresChinchon");
    const allJugadores = storedJugadoresChinchon
      ? JSON.parse(storedJugadoresChinchon)
      : [];
      setAllJugadores(allJugadores)
    
  },[])
  const handlerAddJugadores = () => {
    if (jugadorCreate.nombre.length < 3) {
      return alert("Como mínimo 3 letras para el nombre");
    }

    const storedJugadoresChinchon = localStorage.getItem("JugadoresChinchon");
    const allJugadores = storedJugadoresChinchon
      ? JSON.parse(storedJugadoresChinchon)
      : [];

    const newJugadores = [...(allJugadores || []), jugadorCreate];
    localStorage.setItem("JugadoresChinchon", JSON.stringify(newJugadores));
    alert("Jugador creado");
    setJugadorCreate({
      nombre: "",
      puntos: 0,
    });
  };

  const onChangeCreateJugadores = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJugadorCreate({
      ...jugadorCreate,
      nombre: e.target.value,
    });
  };

  const initialValue: values = {
    onChangeCreateJugadores,
    handlerAddJugadores,
    jugadorCreate,
    allJugadores
  };
  return (
    <storeChinchon.Provider value={initialValue}>
      {children}
    </storeChinchon.Provider>
  );
}
