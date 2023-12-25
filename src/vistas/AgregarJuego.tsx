import { useState } from "react";

interface IRespuesta {
  isCorrect: boolean;
  respuesta?: string;
}

export default function AgregarJuego() {
  const [juego, setJuego] = useState({
    pregunta: "",
    respuestas: [
      { respuesta: "", isCorrect: false },
      { respuesta: "", isCorrect: false },
      { respuesta: "", isCorrect: false }
    ] as IRespuesta[],
  });

  const handlerButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(juego.pregunta.length < 5) {
        return alert("El nombre de la pregunta no puede tener menos de 5 letras")
    }
    const gamesString = localStorage.getItem("Games");
    const games = gamesString ? JSON.parse(gamesString) : [];
    const updatedGames = [...games, juego];
    localStorage.setItem("Games", JSON.stringify(updatedGames));

    setJuego({
        pregunta: "",
        respuestas: [
          { respuesta: "", isCorrect: false },
          { respuesta: "", isCorrect: false },
          { respuesta: "", isCorrect: false }
        ] as IRespuesta[],
      })
      alert("Creado con éxito")
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJuego({ ...juego, [e.target.name]: e.target.value });
  };

  const handlerOnChangeRespuesta = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevaRespuesta: IRespuesta = {
      respuesta: e.target.value,
      isCorrect: juego.respuestas[index].isCorrect, 
    };

    setJuego((prevJuego) => ({
      ...prevJuego,
      respuestas: prevJuego.respuestas.map((respuesta, i) => (i === index ? nuevaRespuesta : respuesta)),
    }));
  };

  const CheckBoxHandler = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setJuego((prevJuego) => ({
      ...prevJuego,
      respuestas: prevJuego.respuestas.map((respuesta, i) => (i === index ? { ...respuesta, isCorrect: isChecked } : respuesta)),
    }));
  };

  return (
    <main>
      <form onSubmit={handlerButton}>
        <article>
          <span>Pregunta:</span>
          <input type="text" onChange={handlerOnChange} name="pregunta" value={juego.pregunta} />
        </article>

        {juego.respuestas.map((respuesta, index) => (
          <article key={index}>
            <span>{`Respuesta${index + 1}:`}</span>
            <input
              type="text"
              name={`respuestas-${index}`}
              onChange={handlerOnChangeRespuesta(index)}
              value={respuesta.respuesta}
            />
            <span>Es verdadero?</span>
            <input
              type="checkbox"
              onChange={CheckBoxHandler(index)}
              checked={respuesta.isCorrect || false }
            />
          </article>
        ))}

        <button>Agregar juego</button>
      </form>
    </main>
  );
}
