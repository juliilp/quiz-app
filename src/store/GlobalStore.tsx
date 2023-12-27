import { createContext, useEffect, useState } from "react";
import { IContext } from "../interface/Icontext";
import { Pregunta } from "../interface/Pregunta";

export const store = createContext<IContext | null>(null);

export default function GlobalStore({ children }: any) {
  const [accesoTerminado, setAccesoTerminado] = useState(false);
  const [allGames, setAllGames] = useState<Pregunta[]>([]);

  useEffect(() => {
    let gamesLocalStorage: string | null = localStorage.getItem("Games");

    if (gamesLocalStorage !== null) {
      const parsedGames: Pregunta[] = JSON.parse(gamesLocalStorage);
      setAllGames(parsedGames);
    }
  }, []);

  useEffect(() => {
    const existingGames = localStorage.getItem("Games");
    if (!existingGames) {
      localStorage.setItem("Games", JSON.stringify([]));
    }
  }, []);

  const AccessoTerminadoTrue = () => setAccesoTerminado(true);
  const AccessoTerminadoFalse = () => setAccesoTerminado(false);

  const handlerBorrarPregunta = (pregunta: string) => {
    const newGames = allGames.filter((p: Pregunta) => p.pregunta !== pregunta);
    setAllGames(newGames);
    localStorage.setItem("Games", JSON.stringify(newGames));
  };

  const values : IContext = {
    AccessoTerminadoTrue,
    accesoTerminado,
    AccessoTerminadoFalse,
    allGames,
    handlerBorrarPregunta,
  };

  return (
    <store.Provider value={values}>
      {children}
    </store.Provider>
  );

}
