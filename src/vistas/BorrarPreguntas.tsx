import { useEffect } from "react";
import useGlobalStore from "../hooks/useGlobalStore";
import CardBorrarPregunta from "../components/CardBorrarPregunta";
import { Pregunta } from "../interface/Pregunta";

export default function BorrarPreguntas() {
  const { allGames, handlerBorrarPregunta, AccessoTerminadoTrue } = useGlobalStore();

  useEffect(() => {
    AccessoTerminadoTrue(); 
  }, [AccessoTerminadoTrue]);

  return (
    <main className="flex gap-8">
      {allGames.map((g : Pregunta, key) => (
        <CardBorrarPregunta pregunta={g.pregunta} key={key} index={key} onBorrar={() => handlerBorrarPregunta(g.pregunta)} />
      ))}
    </main>
  );
}
