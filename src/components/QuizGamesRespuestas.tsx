import { Pregunta } from "../interface/Pregunta";


interface Props {
    respuestas: Pregunta[]
    titulo: string
}



export default function QuizGamesRespuestas({ respuestas, titulo }: Props) {
    const tituloDelMap = titulo.split(" ")[1]
  return (
    <article>
      {respuestas.length === 0 ? (
        <h4>{titulo}</h4>
      ) : (
        respuestas.map((r) => {
            console.log(r)
          return (
            <>
              <h4>
                Pregunas que han sido
                {tituloDelMap.toLocaleLowerCase()}
              </h4>
              
            </>
          );
        })
      )}
    </article>
  );
}
