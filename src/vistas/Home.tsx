import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Juegos</h1>
        <article className="flex items-center gap-8" >
        <Link to="/quizgames" >Quiz Games</Link>
      <Link to="/Chinchon" >Chinchon</Link>
        </article>
    </main>
  )
}
