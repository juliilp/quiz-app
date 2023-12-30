import { useEffect, useState } from "react";
import useChinchonStore from "../hooks/useChinchonStore";

interface Props {
  nombre: string;
  puntos: number[];
}

export default function CardChinchon({ nombre, puntos }: Props) {
  const [puntosTotal, setPuntosTotal] = useState<number>(0);
  const [newPuntos, setNewPuntos] = useState<string>("");
  const onChangeNewPuntos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    setNewPuntos(number);
  };

  const { sumarPuntos, handlerRetroceder, borrarJugador, hacerMenos10 } =
    useChinchonStore();

  const handlerSumarPuntos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sumarPuntos(nombre, Number(newPuntos));
    setNewPuntos("");
  };

  useEffect(() => {
    setPuntosTotal(puntos.reduce((acc, val) => acc + val, 0));
  }, [puntos]);

  const primerLetra = nombre.split("")[0].toUpperCase();
  const restoDeLetras = primerLetra + nombre.slice(1, -1).toLowerCase();

  return (
    <article className="flex flex-col relative  w-[300px] p-4 border border-black">
      <h2 className="mb-6">{restoDeLetras}</h2>
      <form onSubmit={handlerSumarPuntos}>
        <input
          type="number"
          onChange={onChangeNewPuntos}
          className="border border-black"
          value={newPuntos}
        />

        <article className="flex gap-4 items-center mt-2">
          <button type="button" onClick={() => handlerRetroceder(nombre)}>
            Retroceder
          </button>
          <button type="button" onClick={() => hacerMenos10(nombre)}>
            -10
          </button>
          <button type="submit">Sumar</button>
        </article>
      </form>

      <article className="absolute top-0 right-2 flex gap-4 ">
        <h4 className="text-lg">Puntos: {puntosTotal}</h4>
        <button onClick={() => borrarJugador(nombre)}>❌</button>
      </article>
    </article>
  );
}
