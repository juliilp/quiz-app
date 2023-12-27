import { createContext, useEffect, useState } from "react";
import { IContext, IRespuesta } from "../interface/Icontext";
import { Pregunta } from "../interface/Pregunta";

export const store = createContext<IContext | null>(null);

export default function GlobalStore({ children }: any) {
  const [accesoTerminado, setAccesoTerminado] = useState(false);
  const [allGames, setAllGames] = useState<Pregunta[]>([]);
  const [juego, setJuego] = useState({
    pregunta: "",
    respuestas: [
      { respuesta: "", isCorrect: false },
      { respuesta: "", isCorrect: false },
      { respuesta: "", isCorrect: false },
    ] as IRespuesta[],
    respuestaUser: false,
  });
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
    localStorage.setItem("Games", JSON.stringify(newGames));
    setAllGames(newGames);
  };
  const handlerAgregarJuego = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (juego.pregunta.length < 5)
      return alert("El nombre de la pregunta no puede tener menos de 5 letras");

    // Si no tiene respuesta verdaderas, que retorne un alert
    const respuestasVerdaderas = juego.respuestas.filter(
      (r) => r.isCorrect === true
    );

    if (respuestasVerdaderas.length === 0)
      return alert("Tenes que marcar al menos una respuesta verdadera");

    const gamesString = localStorage.getItem("Games");
    const games = gamesString ? JSON.parse(gamesString) : [];
    const filterGames = games.filter(
      (g: Pregunta) => g.pregunta === juego.pregunta
    );
    if (filterGames.length > 0)
      return alert("Ya existe un juego con esa pregunta");
    const updatedGames = [...games, juego];
    localStorage.setItem("Games", JSON.stringify(updatedGames));
    setAllGames(updatedGames);
    setJuego({
      pregunta: "",
      respuestas: [
        { respuesta: "", isCorrect: false },
        { respuesta: "", isCorrect: false },
        { respuesta: "", isCorrect: false },
      ] as IRespuesta[],
      respuestaUser: false,
    });
    alert("Creado con éxito");
  };

  const values: IContext = {
    AccessoTerminadoTrue,
    accesoTerminado,
    AccessoTerminadoFalse,
    allGames,
    handlerBorrarPregunta,
    handlerAgregarJuego,
    setJuego,
    juego,
  };

  return <store.Provider value={values}>{children}</store.Provider>;
}
