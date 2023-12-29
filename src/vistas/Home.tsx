import { Link } from "react-router-dom";
import useQuizGamesStore from "../hooks/useQuizGamesStore";
export default function Home() {
  const { selectQuizGames, selectChinchon } = useQuizGamesStore();

  return (
    <main>
      <section className="flex flex-col gap-8 mt-8 ml-6" >
        <article>
          <button onClick={selectQuizGames}>
            <Link to="/quizgames">
              <u className="animate-pulse text-3xl font-semibold ">
                Quiz Games
              </u>
            </Link>
          </button>
          <p className="max-w-[350px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sunt molestiae officiis vel non! Architecto, possimus voluptatem
            necessitatibus dolorem cupiditate odio at officia unde voluptatum.
            Fuga harum possimus nesciunt ullam.
          </p>
        </article>

        <article>
          <button onClick={selectChinchon}>
            <Link to="/Chinchon">
              <u className="animate-pulse text-3xl font-semibold">Chinchon</u>
            </Link>
          </button>

          <p className="max-w-[350px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sunt molestiae officiis vel non! Architecto, possimus voluptatem
            necessitatibus dolorem cupiditate odio at officia unde voluptatum.
            Fuga harum possimus nesciunt ullam.
          </p>
        </article>
      </section>
    </main>
  );
}
