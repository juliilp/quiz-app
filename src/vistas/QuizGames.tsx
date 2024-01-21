import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuizGamesStore from "../hooks/useQuizGamesStore";
import { IContext } from "../interface/Icontext";
import { Pregunta } from "../interface/Pregunta";

export default function Home() {
  const { allGames } = useQuizGamesStore();
  const { AccessoTerminadoTrue }: IContext = useQuizGamesStore();
  const navigate = useNavigate();
  const [checkBoxSelect, setCheckBoxSelect] = useState(false);
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [numero, setNumero] = useState(0);
  const [checkbox, setCheckbox] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  useEffect(() => {
    const preguntasMezcladas = [...allGames].sort(() => Math.random() - 0.5);
    setPreguntas(preguntasMezcladas);
  }, []);

  const handlerSigNumero = () => {
    if (!checkBoxSelect) return alert("Selecciona un checkbox para avanzar");
    if (preguntas.length > numero + 1) {
      setNumero(numero + 1);
      resetCheckbox();
    } else {
      const respuestasFiltradasCorrectas = preguntas.filter(
        (p) => p.respuestaUser === true
      );
      const respuestasFiltradasIncorrectas = preguntas.filter(
        (p) => p.respuestaUser === false
      );
      localStorage.setItem(
        "respuestasCorrectas",
        JSON.stringify(respuestasFiltradasCorrectas)
      );
      localStorage.setItem(
        "respuestasIncorrectas",
        JSON.stringify(respuestasFiltradasIncorrectas)
      );
      localStorage.setItem("Terminado", JSON.stringify(true));
      navigate("/QuizGames/resultados");
      AccessoTerminadoTrue();
    }
    setCheckBoxSelect(false);
  };

  const handlerCheckbox = (index: number) => () => {
    const isCorrect = preguntas[numero].respuestas[index].isCorrect;
    const updatedCheckbox = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    };
    updatedCheckbox[`checkbox${index + 1}` as keyof typeof checkbox] = true;
    setCheckbox(updatedCheckbox);
    setCheckBoxSelect(true);
    setPreguntas((prevPreguntas) => {
      const updatedPreguntas = [...prevPreguntas];
      updatedPreguntas[numero] = {
        ...updatedPreguntas[numero],
        respuestaUser: isCorrect,
      };
      return updatedPreguntas;
    });
  };

  const resetCheckbox = () =>
    setCheckbox({ checkbox1: false, checkbox2: false, checkbox3: false });

  useEffect(() => {
    if (allGames.length === 0) {
      navigate("/QuizGames/agregar-juego");
    }
  }, [allGames]);
  return (
    <main className="pt-12 md:pt-32 h-screen">
      <h1 className="text-xl md:text-3xl text-center my-16">
        {preguntas[numero]?.pregunta}
      </h1>
      <article className="flex flex-wrap items-center justify-around">
        {preguntas.length > 0 &&
          preguntas[numero].respuestas.map((r, key) => (
            <article key={key} className="flex gap-4 items-center">
              <h3 className="text-2xl max-w-[200px] break-words">
                {r.respuesta}
              </h3>

              {r.respuesta && (
                <input
                  type="checkbox"
                  onChange={handlerCheckbox(key)}
                  checked={
                    checkbox[`checkbox${key + 1}` as keyof typeof checkbox]
                  }
                  className="h-6 w-6 rounded-full cursor-pointer"
                />
              )}
            </article>
          ))}
      </article>

      <article className="flex justify-center items-center w-full my-12">
        <button
          onClick={handlerSigNumero}
          className="rounded-lg py-2 px-6 md:px-10 font-bold bg-[#065a82]"
        >
          {preguntas.length > numero + 1 ? " Sig pregunta" : "Ver resultados"}
        </button>
      </article>
    </main>
  );
}
