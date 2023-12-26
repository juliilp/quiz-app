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

export default function Home() {
  const navigate = useNavigate()
  const [respuestasCorrectas, setRespuestasCorrectas] = useState<Pregunta[]>([]);
  const [respuestasIncorrectas, setRespuestasIncorrectas] = useState<Pregunta[]>([]);
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [numero, setNumero] = useState(0);
  const [checkbox, setCheckbox] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });

  useEffect(() => {
    const gamesString = localStorage.getItem("Games");
    const games = gamesString ? JSON.parse(gamesString) : [];
    const preguntasMezcladas = [...games].sort(() => Math.random() - 0.5);
    setPreguntas(preguntasMezcladas);
  }, []);

  const handlerSigNumero = () => {
    if (preguntas.length > numero + 1) {
      setNumero(numero + 1);
      resetCheckbox();
    } else {
      const respuestasFiltradasCorrectas = preguntas.filter((p) => p.respuestaUser === true);
      const respuestasFiltradasIncorrectas = preguntas.filter((p) => p.respuestaUser === false)
      setRespuestasCorrectas(respuestasFiltradasCorrectas);
      setRespuestasIncorrectas(respuestasFiltradasIncorrectas)
      localStorage.setItem("respuestasCorrectas", JSON.stringify(respuestasFiltradasCorrectas))
      localStorage.setItem("respuestasIncorrectas", JSON.stringify(respuestasFiltradasIncorrectas))

      navigate("/resultados")
    }
  };

  const handlerCheckbox = (index: number) => () => {
    const isCorrect = preguntas[numero].respuestas[index].isCorrect;
    const updatedCheckbox = { checkbox1: false, checkbox2: false, checkbox3: false };
    updatedCheckbox[`checkbox${index + 1}`] = true;
    setCheckbox(updatedCheckbox);

    setPreguntas((prevPreguntas) => {
      const updatedPreguntas = [...prevPreguntas];
      updatedPreguntas[numero] = {
        ...updatedPreguntas[numero],
        respuestaUser: isCorrect
      };
      return updatedPreguntas;
    });
  };

  const resetCheckbox = () => setCheckbox({ checkbox1: false, checkbox2: false, checkbox3: false });
  console.log(preguntas)
  return (
    <main>
      <span>{preguntas[numero]?.pregunta}</span>
      {preguntas.length > 0 &&
        preguntas[numero].respuestas.map((r, key) => (
          <article key={key} className="flex gap-4 items-center">
            <span className="text-xl">{r.respuesta}</span>
            <input
              type="checkbox"
              onChange={handlerCheckbox(key)}
              checked={checkbox[`checkbox${key + 1}`]}
            />
          </article>
        ))}
        <button onClick={handlerSigNumero}>
          {
            preguntas.length > numero + 1 ? " Sig pregunta" : "Ver resultados"
          }
        </button>
    </main>
  );
}
