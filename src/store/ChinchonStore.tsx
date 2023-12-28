import { createContext, useEffect, useState } from "react";
import { Jugadores } from "../interface/Jugadores";

interface values {
  handlerAddJugadores: () => void;
  onChangeCreateJugadores: (e: React.ChangeEvent<HTMLInputElement>) => void;
  jugadorCreate: Jugadores;
  allJugadores: Jugadores[];
  sumarPuntos: (nombre: string, puntos: number) => void;
  borrarJugador: (nombre: string) => void;
  borrarTodosJugadores: () => void;
  handlerRetroceder: (nombre: string) => void;
  reiniciarResultados: () => void;
  hacerMenos10 : (nombre: string) => void
}
export const storeChinchon = createContext<values>(null);

export default function ChinchonStore({ children }: any) {
  const [allJugadores, setAllJugadores] = useState<Jugadores[]>([]);
  const [jugadorCreate, setJugadorCreate] = useState({
    nombre: "",
    puntos: [0],
  });

  useEffect(() => {
    const storedJugadoresChinchon = localStorage.getItem("JugadoresChinchon");
    const allJugadores = storedJugadoresChinchon
      ? JSON.parse(storedJugadoresChinchon)
      : [];
    setAllJugadores(allJugadores);
  }, []);
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
      puntos: [0],
    });
    setAllJugadores(newJugadores);
  };

  const onChangeCreateJugadores = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJugadorCreate({
      ...jugadorCreate,
      nombre: e.target.value,
    });
  };

  const sumarPuntos = (nombre: string, puntos: number) => {
    const filterUser: Jugadores[] = allJugadores.filter(
      (u) => u.nombre === nombre
    );
    const newPuntos = [...filterUser[0].puntos, puntos];
    const newUser = {
      nombre,
      puntos: newPuntos,
    };
    const oldUsers: Jugadores[] = allJugadores.filter(
      (u) => u.nombre !== nombre
    );
    const newUsers = [...oldUsers, newUser];
    localStorage.setItem("JugadoresChinchon", JSON.stringify(newUsers));
    setAllJugadores(newUsers);
  };

  const borrarJugador = (nombre: string) => {
    const filterJugador = allJugadores.filter((j) => j.nombre !== nombre);
    if (!borrarJugador) {
      return alert("No se encontro el jugador");
    }
    const result = confirm("Estas seguro de borrar a " + nombre + " ?");
    if (result) {
      localStorage.setItem("JugadoresChinchon", JSON.stringify(filterJugador));
      setAllJugadores(filterJugador);
    }
  };

  const borrarTodosJugadores = () => {
    localStorage.setItem("JugadoresChinchon", JSON.stringify([]));
    setAllJugadores([]);
  };

  const handlerRetroceder = (nombre: string) => {
    const findUser = allJugadores.filter((u) => u.nombre === nombre);
    const allUser = allJugadores.filter((u) => u.nombre !== nombre);
    const nuevosPuntos = [...findUser[0].puntos];
    nuevosPuntos.pop();
    const newUsers = [
      ...allUser,
      { nombre: findUser[0].nombre, puntos: nuevosPuntos },
    ];
    localStorage.setItem("JugadoresChinchon", JSON.stringify(newUsers));

    setAllJugadores(newUsers);
  };

  const reiniciarResultados = () => {
    const res = confirm("Estas seguro de reiniciar?")
    if(res) {
      const nuevosJugadores = JSON.parse(JSON.stringify(allJugadores));

      nuevosJugadores.forEach((v: Jugadores) => {
        v.puntos = [0];
      });
  
      localStorage.setItem("JugadoresChinchon", JSON.stringify(nuevosJugadores));
      setAllJugadores(nuevosJugadores);
    }
  };

  const hacerMenos10 = (nombre: string) => {
    // me traigo el jugador
    const findJugador = allJugadores.find((j: Jugadores) => j.nombre === nombre);
    if (findJugador) {
      //Que me traiga todos los jugadores menos el jugador de arriba
      const jugadoresFilter = allJugadores.filter((j: Jugadores) => j.nombre !== nombre);
      // Le saco los 10 puntos
      // Tengo que crear ésto con el push y pop 
      const nuevosPuntos = [...findJugador.puntos]
      nuevosPuntos.push(-10);
      findJugador.puntos = nuevosPuntos
      //Concateno y guardo cambios
      const newJugadores: Jugadores[] = [...jugadoresFilter, findJugador];
      localStorage.setItem("JugadoresChinchon", JSON.stringify(newJugadores));
     return setAllJugadores(newJugadores);
    }
    console.log("test")
  }
  const initialValue: values = {
    onChangeCreateJugadores,
    handlerAddJugadores,
    jugadorCreate,
    allJugadores,
    sumarPuntos,
    borrarJugador,
    borrarTodosJugadores,
    handlerRetroceder,
    reiniciarResultados,
    hacerMenos10
  };
  return (
    <storeChinchon.Provider value={initialValue}>
      {children}
    </storeChinchon.Provider>
  );
}
