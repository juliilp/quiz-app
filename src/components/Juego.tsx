import { useState } from "react";

interface IRespuesta {
    isCorrect?: Boolean
    respuesta : String
}

export default function Juego() {

    const [juego, setJuego] = useState({
        nombre: "",
        pregunta: "",
        respuestas : [] as IRespuesta[]
      });
      const handlerButton = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Juego agregado");
        const gamesString = localStorage.getItem("Games");
        const games = gamesString ? JSON.parse(gamesString) : [];
        const updatedGames = [...games, juego];
        localStorage.setItem("Games", JSON.stringify(updatedGames));
      };
    
      const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJuego({...juego, 
            [e.target.name]: e.target.value });
      };
    
      const handlerOnChangeRespuesta = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nuevaRespuesta: IRespuesta = {
          respuesta: e.target.value,
        };
      
        setJuego((prevJuego) => ({
          ...prevJuego,
          respuestas: [...prevJuego.respuestas, nuevaRespuesta],
        }));
      };
    
      const CheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        console.log(e.target.checked)
        setJuego((prevJuego) => ({
          ...prevJuego,
          respuestas: [
            {
              ...prevJuego.respuestas[0], 
              isCorrect: isChecked 
            },
          ],
        }));
      };

  return (
    <form onSubmit={handlerButton}>

    <article>
      <span>Nombre del juego:</span>
      <input type="text" onChange={handlerOnChange} name="nombre" />
    </article>

    <article>
      <span>Pregunta:</span>
      <input type="text" onChange={handlerOnChange} name="pregunta" />
    </article>

    <article>
        <span>Respuesta:</span>
        <input type="text" name="respuestas" onChange={handlerOnChangeRespuesta}  />
        <span>Es verdadero?</span>
        <input type="checkbox" onChange={CheckBoxHandler} />
    </article>
    <button>Agregar juego</button>
  </form>
  )
}
