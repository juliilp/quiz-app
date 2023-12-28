import { createContext, useEffect, useState } from "react";
import { Jugadores } from "../interface/Jugadores";


interface values {
  handlerAddJugadores: () => void;
  onChangeCreateJugadores: (e: React.ChangeEvent<HTMLInputElement>) => void;
  jugadorCreate : Jugadores,
  allJugadores: Jugadores[],
  sumarPuntos : (nombre: string, puntos: number) => void
  borrarJugador: (nombre: string) => void
  borrarTodosJugadores : () => void
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

  const sumarPuntos = (nombre: string, puntos: number) => {
    const filterUser: Jugadores[] = allJugadores.filter((u) => u.nombre === nombre);
    const newPuntos = filterUser[0].puntos + puntos;
    const newUser = {
      nombre,
      puntos: newPuntos,
    };
    const oldUsers: Jugadores[] = allJugadores.filter((u) => u.nombre !== nombre);
    const newUsers = [...oldUsers, newUser];  
    localStorage.setItem("JugadoresChinchon", JSON.stringify(newUsers));
  
    setAllJugadores(newUsers);
  };

  const borrarJugador = (nombre: string) => {
      const filterJugador = allJugadores.filter((j) => j.nombre === nombre)
      if(!borrarJugador){
        return alert("No se encontro el jugador")
      }
      localStorage.setItem("JugadoresChinchon", JSON.stringify(filterJugador));
      setAllJugadores(filterJugador)
  }

  const borrarTodosJugadores = () => {
    localStorage.setItem("JugadoresChinchon", JSON.stringify([]));
      setAllJugadores([])
  }
  const initialValue: values = {
    onChangeCreateJugadores,
    handlerAddJugadores,
    jugadorCreate,
    allJugadores,
    sumarPuntos,
    borrarJugador,
    borrarTodosJugadores,

  };
  return (
    <storeChinchon.Provider value={initialValue}>
      {children}
    </storeChinchon.Provider>
  );
}
