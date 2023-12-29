import { useEffect, useState } from "react";
import useQuizGamesStore from "../hooks/useQuizGamesStore";
import { IRespuesta, Juego } from "../interface/Icontext";

export default function AgregarJuego() {
  const { handlerAgregarJuego, juego, setJuego } = useQuizGamesStore();
  const [errButton, setErrButon] = useState(true);
  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJuego({ ...juego, [e.target.name]: e.target.value });
  };

  const handlerOnChangeRespuesta =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const nuevaRespuesta: IRespuesta = {
        respuesta: e.target.value,
        isCorrect: juego.respuestas[index].isCorrect,
      };

      setJuego((prevJuego: Juego) => ({
        ...prevJuego,
        respuestas: prevJuego.respuestas.map((respuesta, i) =>
          i === index ? nuevaRespuesta : respuesta
        ),
      }));
    };

  const CheckBoxHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;

      setJuego((prevJuego: Juego) => ({
        ...prevJuego,
        respuestas: prevJuego.respuestas.map((respuesta, i) =>
          i === index ? { ...respuesta, isCorrect: isChecked } : respuesta
        ),
        respuestaUser: false,
      }));
    };

  // Hice esto así le puedo pasar el e.preventDefault por parametro al estado global
  const handlerConPreventDefault = (e: React.FormEvent<HTMLFormElement>) => {
    handlerAgregarJuego(e);
  };

  useEffect(() => {
    const respuestasMarcadas = [];
    if (juego.pregunta.length < 5) {
      return setErrButon(true);
    }

    //Recorro buscando respuestas con el isCorrect en true
    const respuestasVerdaderas: IRespuesta[] = juego.respuestas.filter(
      (r) => r.isCorrect === true
    );
    // Si no tiene respuesta verdaderas, que lo setee al error en true
    if (respuestasVerdaderas.length === 0) {
      return setErrButon(true);
    }
    // Si hay una respuesta marcada que no tiene respuesta, la pushea a "respuestasMarcadas"
    respuestasVerdaderas.map((r) => {
      if (r.respuesta.length < 5) {
        respuestasMarcadas.push(r);
      }
    });
    if (respuestasMarcadas.length > 0) {
      return setErrButon(true);
    }

    setErrButon(false);
  }, [errButton, juego.pregunta, juego.respuestas]);
  return (
    <main className="w-full">
      <form
        onSubmit={handlerConPreventDefault}
        className="w-full flex items-center justify-center gap-8 flex-col"
      >
        <article className="w-full flex items-center justify-center mb-6 mt-12">
          <input
            type="text"
            onChange={handlerOnChange}
            name="pregunta"
            value={juego.pregunta}
            placeholder="Nombre de la pregunta..."
            className="py-2 pl-3 w-[300px] outline-none border border-black "
          />
        </article>

        <section className="flex items-center justify-center flex-col gap-4">
          {juego.respuestas.map((respuesta, index) => (
            <article key={index} className="flex gap-4 items-center">
              <input
                type="text"
                name={`respuestas-${index}`}
                onChange={handlerOnChangeRespuesta(index)}
                value={respuesta.respuesta}
                placeholder={`Respuesta...${index + 1}`}
                className="pl-3 border border-black rounded-md"
              />
              <span className="hidden md:block">Es verdadero?</span>
              <input
                type="checkbox"
                onChange={CheckBoxHandler(index)}
                checked={respuesta.isCorrect || false}
                className="w-4 h-4"
              />
            </article>
          ))}
        </section>

        <button
          className={` ${
            errButton ? "cursor-not-allowed" : "cursor-pointer"
          } mt-6 rounded-lg py-2 px-6 md:px-10 font-bold text-white bg-red-600`}
        >
          Agregar juego
        </button>
      </form>
    </main>
  );
}
