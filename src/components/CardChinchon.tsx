import { useEffect, useState } from "react";
import useChinchonStore from "../hooks/useChinchonStore";

interface Props {
  nombre: string;
  puntos: number[];
}

export default function CardChinchon({ nombre, puntos }: Props) {
  const [puntosTotal, setPuntosTotal] = useState<number>(0);
  const [newPuntos, setNewPuntos] = useState<number>(0);

  const onChangeNewPuntos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    setNewPuntos(Number(number));
  };

  const { sumarPuntos,handlerRetroceder } = useChinchonStore();

  const handlerSumarPuntos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sumarPuntos(nombre, newPuntos);
  };


  useEffect(() => {
    setPuntosTotal(puntos.reduce((acc, val) => acc + val, 0));
  }, [puntos]);

  return (
    <article className="flex flex-col">
      <h2>{nombre}</h2>
      <p>{puntosTotal}</p>
      <form onSubmit={handlerSumarPuntos}>
        <input type="text" value={newPuntos} onChange={onChangeNewPuntos} className="border border-black" />
        <button>Sumar</button>
      </form>
      <button onClick={() => handlerRetroceder(nombre)}>Retroceder</button>
    </article>
  );
}
