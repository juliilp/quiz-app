import { useEffect } from "react";
import useGlobalStore from "../hooks/useGlobalStore";
import CardBorrarPregunta from "../components/CardBorrarPregunta";

export default function BorrarPreguntas() {
  const { allGames, handlerBorrarPregunta, AccessoTerminadoTrue } = useGlobalStore();

  useEffect(() => {
    AccessoTerminadoTrue(); // Asumiendo que este efecto debería ejecutarse al cargar la página
  }, [AccessoTerminadoTrue]);

  const handleBorrarPregunta = (pregunta: string) => {
    handlerBorrarPregunta(pregunta);
  };

  return (
    <main className="flex gap-8">
      {allGames.map((g, key) => (
        <CardBorrarPregunta pregunta={g.pregunta} key={key} index={key} onBorrar={handleBorrarPregunta} />
      ))}
    </main>
  );
}
