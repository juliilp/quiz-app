import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "../hooks/useGlobalStore";

interface Respuesta {
  respuesta: string;
  isCorrect: boolean;
}

interface Pregunta {
  pregunta: string;
  respuestas: Respuesta[];
  respuestaUser: boolean;
}

export default function Resultados() {
  const { accesoTerminado, AccessoTerminadoFalse } = useGlobalStore();
  const navigate = useNavigate();
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<Pregunta[]>([]);
  const [respuestaIncorrecta, setRespuestaIncorrecta] = useState<Pregunta[]>(
    []
  );
  useEffect(() => {
    if (!accesoTerminado) {
      navigate("/");
    }
    const localStorageRespuestaCorrecta = localStorage.getItem(
      "respuestasCorrectas"
    );
    const localStorageRespuestaIncorrecta = localStorage.getItem(
      "respuestasIncorrectas"
    );

    if (localStorageRespuestaCorrecta !== null) {
      setRespuestaCorrecta(JSON.parse(localStorageRespuestaCorrecta));
    }
    if (localStorageRespuestaIncorrecta !== null) {
      setRespuestaIncorrecta(JSON.parse(localStorageRespuestaIncorrecta));
    }
  }, []);

  const handlerResultados = () => {
    localStorage.setItem("respuestasCorrectas", JSON.stringify([]));
    localStorage.setItem("respuestasIncorrectas", JSON.stringify([]));
    navigate("/");
    AccessoTerminadoFalse();
  };

  return (
    <main>
      {respuestaCorrecta.length > 0 && (
        <article>
          <span>Respuestas Correctas:</span>

          {respuestaCorrecta.map((r, key) => {
            console.log(respuestaCorrecta);
            return (
              <article>
                <span key={key}>{r.pregunta}</span>
                <ul>
                  {r.respuestas.map((re, index) => {
                    return (
                      <li key={index}>
                        <span>
                          {re.respuesta} {re.isCorrect === true ? "✅" : "❌"}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </article>
      )}
      {respuestaIncorrecta.length > 0 && (
        <article>
          <span>Respuestas Incorrectas:</span>
          <article>
            {respuestaIncorrecta.map((r, key) => {
              return (
                <>
                  <span key={key} className="block">
                    La pregunta: {r.pregunta}
                  </span>
                  <span>
                    Su respuesta correcta:
                    {r.respuestas.map((r, key) => {
                      return (
                        r.isCorrect && <strong key={key}> {r.respuesta}</strong>
                      );
                    })}
                  </span>
                  <span></span>
                </>
              );
            })}
          </article>
        </article>
      )}
      {respuestaCorrecta.length > 0 && respuestaIncorrecta.length === 0 && (
        <span>No hay respuestas incorrectas!</span>
      )}
      <button
        onClick={handlerResultados}
        className="block py-1 px-4 bg-slate-500 rounded-lg text-white"
      >
        Reiniciar resultados
      </button>
    </main>
  );
}
