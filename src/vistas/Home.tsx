import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Juegos</h1>
      <Link to="/quizgames" >Quiz Games</Link>
    </main>
  )
}
