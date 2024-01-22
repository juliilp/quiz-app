import { useState } from "react";
import TrucoPrimerCuadrado from "../components/TrucoPrimerCuadrado";
import TrucoSegundoCuadrado from "../components/TrucoSegundoCuadrado";
import TrucoTercerCuadrado from "../components/TrucoTercerCuadrado";
import TrucoCuartoCuadrado from "../components/TrucoCuartoCuadrado";

export default function Truco() {
  const [jugador1, setJugador1] = useState(0);
  const [jugador2, setJugador2] = useState(0);

  const handlerJugador1 = (mensaje: string) => {
    if (mensaje === "sumar" && jugador1 < 20) {
      console.log(jugador1);
      return setJugador1((prev) => prev + 1);
    }
    if (mensaje === "restar" && jugador1 > 0) {
      return setJugador1((prev) => prev - 1);
    }
  };
  const handlerJugador2 = (mensaje: string) => {
    if (mensaje === "sumar" && jugador2 < 20) {
      return setJugador2((prev) => prev + 1);
    }
    if (mensaje === "restar" && jugador2 !== 0) {
      return setJugador2((prev) => prev - 1);
    }
    return null;
  };

  const jugadores = [
    {
      nombre: "Jugador1",
      handlerSuma: () => handlerJugador1("sumar"),
      handlerResta: () => handlerJugador1("restar"),
      puntos: jugador1,
    },
    {
      nombre: "Jugador2",
      handlerSuma: () => handlerJugador2("sumar"),
      handlerResta: () => handlerJugador2("restar"),
      puntos: jugador2,
    },
  ];
  console.log(jugador1);
  return (
    <main className="pt-12 md:pt-32 h-screen w-full flex gap-8  justify-center">
      {jugadores.map((j, key) => {
        return (
          <section key={key} className="flex flex-col gap-8 border h-max p-5">
            <span>{j.nombre}</span>
            <div className="flex gap-4">
              <button onClick={j.handlerSuma}>Sumar</button>
              <button onClick={j.handlerResta}>Restar</button>
            </div>
            {j.puntos > 0 && (
              <article>
                <TrucoPrimerCuadrado numero={j.puntos} />
                <TrucoSegundoCuadrado numero={j.puntos} />
                <TrucoTercerCuadrado numero={j.puntos} />
                <TrucoCuartoCuadrado numero={j.puntos} />
              </article>
            )}
          </section>
        );
      })}
    </main>
  );
}
