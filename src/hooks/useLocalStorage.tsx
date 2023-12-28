import { useEffect, useState } from "react";
import { Pregunta } from "../interface/Pregunta";

export default function useLocalStorage() {
  const [allQuizGames, setAllQuizGames] = useState([]);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState<Pregunta[]>(
    []
  );
  const [respuestasIncorrectas, setRespuestasIncorrectas] = useState<
    Pregunta[]
  >([]);
  useEffect(() => {
    const storedData = localStorage.getItem("AllQuizGames");
    if (storedData) {
      setAllQuizGames(JSON.parse(storedData));
    } else {
      localStorage.setItem("AllQuizGames", JSON.stringify([]));
    }
  }, []);

  const reiniciarRespuestas = () => {
    localStorage.setItem("respuestasCorrectas", JSON.stringify([]));
    localStorage.setItem("respuestasIncorrectas", JSON.stringify([]));
  }
  return {
    allQuizGames,
    respuestasCorrectas,
    setRespuestasCorrectas,
    respuestasIncorrectas,
    setRespuestasIncorrectas,
    reiniciarRespuestas
  };
}
