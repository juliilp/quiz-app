import { createContext, useEffect, useState } from "react";
import { IContext, IRespuesta } from "../interface/Icontext";
import { Pregunta } from "../interface/Pregunta";

export const store = createContext<IContext | null>(null);

export default function QuizGamesStore({ children }: any) {
  const [typeGame, setTypeGame] = useState("")
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

  const AccessoTerminadoTrue = () => setAccesoTerminado(true);
  const AccessoTerminadoFalse = () => setAccesoTerminado(false);

  const handlerBorrarPregunta = (pregunta: string) => {
    const newGames = allGames.filter((p: Pregunta) => p.pregunta !== pregunta);
    localStorage.setItem("Games", JSON.stringify(newGames));
    setAllGames(newGames);
  };
  const handlerAgregarJuego = (e: React.FormEvent<HTMLFormElement>) => {
    const respuestasMarcadas = []
    e.preventDefault();
    if (juego.pregunta.length < 5)
      return alert("El nombre de la pregunta no puede tener menos de 5 letras");

    //Recorro buscando respuestas con el isCorrect en true
    const respuestasVerdaderas : IRespuesta[] = juego.respuestas.filter(
      (r) => r.isCorrect === true
    );
 // Si no tiene respuesta verdaderas, que retorne un alert
    if(respuestasVerdaderas.length === 0) {
      return alert("Al menos tiene que haber una respuesta verdadera")
    }
    // Si hay una respuesta marcada que no tiene respuesta, la pushea a "respuestasMarcadas"
    respuestasVerdaderas.map((r) => {
      if(r.respuesta.length < 5) {
        respuestasMarcadas.push(r)
      }
    } )
        if(respuestasMarcadas.length > 0) {
          return alert("Las respuestas marcadas tienen que tener al menos 5 letras")
        }
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

  const selectQuizGames = () => {
    localStorage.setItem("TypeGame", "QuizGames");
    setTypeGame("QuizGames")
  };

  const selectChinchon = () => {
    localStorage.setItem("TypeGame", "Chinchon");
    setTypeGame("Chinchon")
  };

  const selectInicio = () => {
    localStorage.setItem("TypeGame", "");
    setTypeGame("")
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
    selectQuizGames,
    selectChinchon,
    selectInicio,
    typeGame
  };

  return <store.Provider value={values}>{children}</store.Provider>;
}
