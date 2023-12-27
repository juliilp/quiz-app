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
  const { accesoTerminado, AccessoTerminadoFalse, allGames } = useGlobalStore();
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
    console.log("Respuestas Correctas: ");
    console.log(respuestaCorrecta);
    console.log("Respuestas Incorrectas: ");
    console.log(respuestaIncorrecta);
  }, []);

  const handlerResultados = () => {
    localStorage.setItem("respuestasCorrectas", JSON.stringify([]));
    localStorage.setItem("respuestasIncorrectas", JSON.stringify([]));
    navigate("/");
    AccessoTerminadoFalse();
  };

  return (
    <main>
      {allGames.map((g) => {
        return (
          <article className="flex flex-col items-center justify-center gap-8" >
            <h2 className="text-3xl font-semibold mt-8 ">{g.pregunta}</h2>
            <ul className="flex gap-8" >
              {g.respuestas.map((res, key) => {
                return (
                  <li key={key} className="text-xl" >
                    {res.isCorrect ? (
                      <span>{res.respuesta}✅</span>
                    ) : (
                      <span>
                        <del>{res.respuesta}</del>
                        ❌
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
      <button
        onClick={handlerResultados}
        className="block py-1 px-4 bg-slate-500 rounded-lg text-white"
      >
        Reiniciar resultados
      </button>
    </main>
  );
}
