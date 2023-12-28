import { Link } from "react-router-dom";

export default function Home() {
  const selectQuizGames = () => {
    localStorage.setItem("TypeGame", "QuizGames");
  };

  const selectChinchon = () => {
    localStorage.setItem("TypeGame", "Chinchon");
  };

  const selectInicio = () => {
    localStorage.setItem("TypGame", "");
  };
  return (
    <main>
      <h1>Juegos</h1>
      <article className="flex items-center gap-8">
        <button onClick={selectQuizGames}>
          <Link to="/quizgames">Quiz Games</Link>
        </button>
        <button onClick={selectChinchon}>
          <Link to="/Chinchon">Chinchon</Link>
        </button>
      </article>
    </main>
  );
}
