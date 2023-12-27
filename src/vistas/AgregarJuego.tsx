import useGlobalStore from "../hooks/useGlobalStore";
import { IRespuesta, Juego } from "../interface/Icontext";



export default function AgregarJuego() {
  const {handlerAgregarJuego, juego, setJuego} = useGlobalStore()

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
        respuestaUser: false
      }));
    };

    // Hice esto así le puedo pasar el e.preventDefault por parametro al estado global
   const  handlerConPreventDefault = (e: React.FormEvent<HTMLFormElement>) => {
      handlerAgregarJuego(e)
    }
    
  return (
    <main>
      <form onSubmit={handlerConPreventDefault}>
        <article>
          <span>Pregunta:</span>
          <input
            type="text"
            onChange={handlerOnChange}
            name="pregunta"
            value={juego.pregunta}
          />
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
              checked={respuesta.isCorrect || false}
            />
          </article>
        ))}

        <button>Agregar juego</button>
      </form>
    </main>
  );
}
