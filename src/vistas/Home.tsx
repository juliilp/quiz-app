import { Link } from "react-router-dom";
import useQuizGamesStore from "../hooks/useQuizGamesStore";
export default function Home() {
  const { selectQuizGames, selectChinchon } = useQuizGamesStore();

  return (
    <main>
      <section className="flex flex-col gap-8 mt-8 ml-6">
        <article>
          <button onClick={selectQuizGames}>
            <Link to="/quizgames">
              <u className="animate-pulse text-3xl font-semibold ">
                Quiz Games
              </u>
            </Link>
          </button>
          <p className="max-w-[350px]">
            Se trata de un juego donde vas a poder crear tus propias preguntas y
            respuestas de manera ilimitada, donde lo podrías usar tanto para
            estudiar como para divertirte, donde al final de la sección sabrías
            cuales preguntas respondiste bien o mal
          </p>
        </article>

        <article>
          <button onClick={selectChinchon}>
            <Link to="/Chinchon">
              <u className="animate-pulse text-3xl font-semibold">Chinchon</u>
            </Link>
          </button>

          <p className="max-w-[350px]">
            ¡Basta de tener que contar los puntos manualmente! Disfruta del
            juego y charlas sin pausas repetitivas entre medio, con ésta app vas
            a poder desde tu celular o computadora sumar,restar retroceder o
            limpiar todos los puntos las veces que vos quieras!
          </p>
        </article>
      </section>
    </main>
  );
}
