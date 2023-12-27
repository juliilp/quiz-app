import useGlobalStore from "../hooks/useGlobalStore";
import CardBorrarPregunta from "../components/CardBorrarPregunta";
import { Pregunta } from "../interface/Pregunta";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BorrarPreguntas() {
  const navigate = useNavigate()
  const { allGames, handlerBorrarPregunta, } = useGlobalStore();

  useEffect(() => {
    if(allGames.length === 0) {
      navigate("/")
    }
  },[allGames])
  return (
    <main className="flex gap-8">
      {allGames.map((g : Pregunta, key) => (
        <CardBorrarPregunta pregunta={g.pregunta} key={key} index={key} onBorrar={() => handlerBorrarPregunta(g.pregunta)} />
      ))}
    </main>
  );
}
