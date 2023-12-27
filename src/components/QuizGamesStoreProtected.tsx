import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function QuizGamesStoreProtected() {
  const navigate = useNavigate();
  useEffect(() => {
    const typeGame = localStorage.getItem("TypeGame");

    if (typeGame !== "QuizGames") {
      navigate("/");
    }
  }, []);

  return <Outlet></Outlet>;
}
