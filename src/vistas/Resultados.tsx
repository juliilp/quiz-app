import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQuizGamesStore from "../hooks/useQuizGamesStore";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Resultados() {
  const { accesoTerminado, AccessoTerminadoFalse, allGames } =
    useQuizGamesStore();
  const {
    setRespuestasCorrectas,
    setRespuestasIncorrectas,
    reiniciarRespuestas,
  } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accesoTerminado) {
      navigate("/QuizGames");
    }
    const localStorageRespuestaCorrecta = localStorage.getItem(
      "respuestasCorrectas"
    );
    const localStorageRespuestaIncorrecta = localStorage.getItem(
      "respuestasIncorrectas"
    );

    if (localStorageRespuestaCorrecta !== null) {
      setRespuestasCorrectas(JSON.parse(localStorageRespuestaCorrecta));
    }
    if (localStorageRespuestaIncorrecta !== null) {
      setRespuestasIncorrectas(JSON.parse(localStorageRespuestaIncorrecta));
    }
  }, []);

  const handlerResultados = () => {
    reiniciarRespuestas();
    navigate("/");
    AccessoTerminadoFalse();
  };

  return (
    <main>
      {allGames.map((g, key) => {
        return (
          <article
            key={key}
            className="flex flex-col items-center justify-center gap-8"
          >
            <h2 className="text-3xl font-semibold mt-8 ">{g.pregunta}</h2>
            <ul className="flex gap-8">
              {g.respuestas.map((res, key) => {
                return (
                  <li key={key} className="text-xl">
                    {res.isCorrect ? (
                      <span>{res.respuesta}✅</span>
                    ) : (
                      <span>
                        <del>{res.respuesta}</del>❌
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
      <article className="flex justify-center items-center">
        <button
          onClick={handlerResultados}
          className=" mt-6 rounded-lg py-2 px-6 md:px-10 font-bold text-white bg-red-600"
        >
          Reiniciar resultados
        </button>
      </article>
    </main>
  );
}
