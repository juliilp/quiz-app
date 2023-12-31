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
    respuestasCorrectas,
    respuestasIncorrectas,
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
    navigate("/quizgames");
    AccessoTerminadoFalse();
  };
  

  return (
    <main>
      <section className="grid grid-cols-2">
        {allGames.map((g, key) => {
          return (
            <article
              key={key}
              className="flex flex-col items-center justify-center gap-8 "
            >
              <h2 className="md:text-2xl font-semibold mt-8 ">
                {key + 1}) {g.pregunta}
              </h2>
              <ul className="flex flex-col md:flex-row gap-8">
                {g.respuestas.map((res, key) => {
                  return <>
                    {res.respuesta && 
                      <li key={key} className="text-sm">
                      {res.isCorrect ? (
                        <span>{res.respuesta}✅</span>
                      ) : (
                        <span>
                          {res.respuesta} ❌
                        </span>
                      )}
                    </li>
                    }
                  </>
                })}
              </ul>
            </article>
          );
        })}
      </section>

        <div className="w-full border border-dashed mt-16" />
    <section className="my-16 flex gap-8  justify-around text-center " >
    <article>
        {respuestasCorrectas.length === 0 ? (
          <h3 className="text-xl md:text-2xl" >No hay respuestas correctas 🙁</h3>
        ) : (
          <>
            <h4 className="text-xl md:text-2xl" >Preguntas que has respondido bien:</h4>
            <ul className="flex flex-col gap-4 my-6 text-lg" >
            {respuestasCorrectas.map((r) => {
              return (
               
                  <li>{r.pregunta}</li>
              
              );
            })}
            </ul>
          </>
        )}
      </article>

      <article>
        {respuestasIncorrectas.length === 0 ? (
          <h4 className="text-xl md:text-2xl" >No hay respuestas incorrectas!</h4>
        ) : (
          <>
            <h4 className="text-xl md:text-2xl" >Preguntas que has respondido mal:</h4>
           <ul className="flex flex-col gap-4 my-6 text-lg" >
           {respuestasIncorrectas.map((r) => {
              return (
                
                  <li>{r.pregunta}</li>
               
              );
            })}
           </ul>
          </>
        )}
      </article>
    </section>

      <article className="flex justify-center items-center">
        <button
          onClick={handlerResultados}
          className=" mt-6 rounded-lg py-2 px-6 md:px-10 font-bold bg-[#065a82]"
        >
          Reiniciar resultados
        </button>
      </article>
    </main>
  );
}
