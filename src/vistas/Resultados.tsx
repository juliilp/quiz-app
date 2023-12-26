import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<Pregunta[]>([]);
  const [respuestaIncorrecta, setRespuestaIncorrecta] = useState<Pregunta[]>(
    []
  );

  useEffect(() => {
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
  };
  return (
    <main>
      <button
        onClick={handlerResultados}
        className="block py-1 px-4 bg-slate-500 rounded-lg text-white"
      >
        Reiniciar resultados
      </button>
      {respuestaCorrecta.length > 0 && (
        <article>
          <span>Respuestas Correctas:</span>
          <ul>
            {respuestaCorrecta.map((r, key) => {
              return <li key={key}>{r.pregunta}</li>;
            })}
          </ul>
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
                    {r.pregunta}
                  </span>
                  <span>
                    Su respuesta correcta era:
                    {r.respuestas.map((r) => {
                      return r.isCorrect && <strong>{r.respuesta}</strong>;
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
    </main>
  );
}
